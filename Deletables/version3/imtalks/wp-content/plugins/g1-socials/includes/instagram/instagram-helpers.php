<?php
/**
 * Instagram things
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package G1_Socials
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

/**
 * Get Instagram
 *
 * @param string  $username Username/Tag to be displayed.
 * @return string Instagram Feed.
 */
function g1_socials_get_instagram_feed( $username ) {
	$username       = trim( strtolower( $username ) );
	$instagram_feed = get_transient( 'g1-instagram-cache-' . sanitize_title_with_dashes( $username ) );
	if ( false === $instagram_feed ) {
		$instagram_feed = g1_socials_scrape_instagram( $username );
	}
	if ( ! empty( $instagram_feed ) && false !== $instagram_feed && ! is_wp_error( $instagram_feed ) ) {
		return unserialize( base64_decode( $instagram_feed ) );
	} else {
		return new WP_Error( 'no_feed', esc_html__( 'Instagram did not return any images.', 'g1_socials' ) );
	}
}

/**
 * Scrap Instagram
 * based on https://gist.github.com/cosmocatalano/4544576.
 *
 * @param string  $username Username/Tag to be displayed.
 * @return string Instagram Feed.
 */
function g1_socials_scrape_instagram( $username ) {
	switch ( substr( $username, 0, 1 ) ) {
		case '#':
			$url = esc_url( 'https://instagram.com/explore/tags/' . str_replace( '#', '', $username ) );
			break;
		default:
			$url = esc_url( 'https://instagram.com/' . str_replace( '@', '', $username ) );
			break;
	}

	$remote = wp_remote_get( $url );

	if ( is_wp_error( $remote ) ) {
		return new WP_Error( 'service_down', esc_html__( 'Unable to communicate with Instagram.', 'g1_socials' ) );
	}

	if ( 200 !== wp_remote_retrieve_response_code( $remote ) ) {
		return new WP_Error( 'wrong_response', esc_html__( 'Instagram did not return a 200.', 'g1_socials' ) );
	}

	$shards      = explode( 'window._sharedData = ', $remote['body'] );
	$insta_json  = explode( ';</script>', $shards[1] );
	$insta_array = json_decode( $insta_json[0], true );

	if ( ! $insta_array ) {
		return new WP_Error( 'wrong_json', esc_html__( 'Instagram has returned invalid data.', 'g1_socials' ) );
	}

	if ( isset( $insta_array['entry_data']['ProfilePage'][0]['user']['media']['nodes'] ) ) {
		$images = $insta_array['entry_data']['ProfilePage'][0]['user']['media']['nodes'];
	} elseif ( isset( $insta_array['entry_data']['TagPage'][0]['tag']['media']['nodes'] ) ) {
		$images = $insta_array['entry_data']['TagPage'][0]['tag']['media']['nodes'];
	} else {
		return new WP_Error( 'wrong_json_2', esc_html__( 'Instagram has returned invalid data.', 'g1_socials' ) );
	}

	if ( ! is_array( $images ) ) {
		return new WP_Error( 'wrong_json', esc_html__( 'Instagram has returned invalid data.', 'g1_socials' ) );
	}

	$instagram = array();

	foreach ( $images as $image ) {

		$image['thumbnail_src'] = preg_replace( '/^https?\:/i', '', $image['thumbnail_src'] );
		$image['display_src'] = preg_replace( '/^https?\:/i', '', $image['display_src'] );

		// handle both types of CDN url.
		if ( ( strpos( $image['thumbnail_src'], 's640x640' ) !== false ) ) {
			$image['thumbnail'] = str_replace( 's640x640', 's160x160', $image['thumbnail_src'] );
			$image['small'] = str_replace( 's640x640', 's320x320', $image['thumbnail_src'] );
		} else {
			$urlparts = wp_parse_url( $image['thumbnail_src'] );
			$pathparts = explode( '/', $urlparts['path'] );
			array_splice( $pathparts, 3, 0, array( 's160x160' ) );
			$image['thumbnail'] = '//' . $urlparts['host'] . implode( '/', $pathparts );
			$pathparts[3] = 's320x320';
			$image['small'] = '//' . $urlparts['host'] . implode( '/', $pathparts );
		}
		$image['large'] = $image['thumbnail_src'];
		if ( true === $image['is_video'] ) {
			$type = 'video';
		} else {
			$type = 'image';
		}
		$caption = __( 'Instagram Image', 'g1_socials' );
		if ( ! empty( $image['caption'] ) ) {
			$caption = $image['caption'];
		}

		$instagram[] = array(
			'description' => $caption,
			'link'        => trailingslashit( '//instagram.com/p/' . $image['code'] ),
			'time'        => $image['date'],
			'comments'    => $image['comments']['count'],
			'likes'       => $image['likes']['count'],
			'thumbnail'   => $image['thumbnail'],
			'small'       => $image['small'],
			'large'       => $image['large'],
			'original'    => $image['display_src'],
			'type'        => $type,
		);
	} // End foreach().

	// do not set an empty transient - should help catch private or empty accounts.
	$instagram = base64_encode( serialize( $instagram ) );
	if ( ! empty( $instagram ) ) {
		set_transient( 'g1-instagram-cache-' . sanitize_title_with_dashes( $username ), $instagram, HOUR_IN_SECONDS * 2 );
		return $instagram;
	} else {
		return '';
	}
}
