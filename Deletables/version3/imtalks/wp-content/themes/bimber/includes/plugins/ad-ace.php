<?php
/**
 * WP QUADS plugin functions
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'after_setup_theme', 				'bimber_adace_register_ad_ids' );
remove_filter( 'the_content', 					'adace_sponsor_before_post_inject' );
remove_filter( 'the_content', 					'adace_sponsor_after_post_inject' );
add_action( 'bimber_before_single_content', 	'bimber_adace_sponsor_before_content' );
add_action( 'bimber_after_single_content', 		'bimber_adace_sponsor_after_content',0,1 );

add_action( 'admin_head',           			'bimber_adace_hide_places' );
add_action( 'widgets_init', 'bimber_adace_deregister_places_widget', 11,0 );

add_filter( 'adace_support_sponsor', '__return_true' );


/**
 * Hide Places menu
 */
function bimber_adace_hide_places() {
	remove_menu_page( 'edit.php?post_type=adace_place' );
}

/**
 * Register custom ad ids
 */
function bimber_adace_register_ad_ids() {

	adace_register_ad_section( 'bimber', __( 'Bimber', 'bimber' ) );

	adace_register_ad_slot(
		array(
			'id'   => 'bimber_before_header_theme_area',
			'name' => esc_html__( 'Before header theme area', 'bimber' ),
			'section' => 'bimber',
		)
	);

	adace_register_ad_slot(
		array(
			'id'   => 'bimber_before_content_theme_area',
			'name' => esc_html__( 'Before content theme area', 'bimber' ),
			'section' => 'bimber',
		)
	);

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_after_featured_content',
		'name' => esc_html__( 'After featured content', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_before_related_entries',
		'name' => esc_html__( 'Before "You May Also Like" section', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_before_more_from',
		'name' => esc_html__( 'Before "More From" section', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_before_comments',
		'name' => esc_html__( 'Before comments area', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_before_dont_miss',
		'name' => esc_html__( 'Before "Don\'t Miss" section', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_inside_grid',
		'name' => esc_html__( 'Inside grid collection', 'bimber' ),
		'section' => 'bimber',
		'is_repeater' => true,
		'options' => array(
			'is_singular_editable'       => false,
		),
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_inside_list',
		'name' => esc_html__( 'Inside list collection', 'bimber' ),
		'section' => 'bimber',
		'is_repeater' => true,
		'options' => array(
			'is_singular_editable'       => false,
		),
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_inside_classic',
		'name' => esc_html__( 'Inside classic collection', 'bimber' ),
		'section' => 'bimber',
		'is_repeater' => true,
		'options' => array(
			'is_singular_editable'       => false,
		),
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_inside_stream',
		'name' => esc_html__( 'Inside stream collection', 'bimber' ),
		'section' => 'bimber',
		'is_repeater' => true,
		'options' => array(
			'is_singular_editable'       => false,
		),
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_left_stream',
		'name' => esc_html__( 'On the left side of stream collection', 'bimber' ),
		'section' => 'bimber',
	) );

	adace_register_ad_slot(
		array(
		'id'    => 'bimber_right_stream',
		'name' => esc_html__( 'On the right side of stream collection', 'bimber' ),
		'section' => 'bimber',
	) );
}

/**
 * Inject sponsor before content
 */
function bimber_adace_sponsor_before_content() {
	$template = get_option( 'adace_sponsor_before_post' );
	$content = '';
	if ( 'compact' === $template ) {
		$content = adace_get_sponsor_box_compact();
	}
	if ( 'full' === $template ) {
		$content = adace_get_sponsor_box_full();
	}
	echo $content;
}

/**
 * Inject sponsor after content
 */
function bimber_adace_sponsor_after_content() {
	$template = get_option( 'adace_sponsor_after_post' );
	$content = '';
	if ( 'compact' === $template ) {
		$content = adace_get_sponsor_box_compact();
	}
	if ( 'full' === $template ) {
		$content = adace_get_sponsor_box_full();
	}
	echo $content;
}


/**
 * Ads widget register function
 */
function bimber_adace_deregister_places_widget() {
	unregister_widget( 'Adace_Places_Widget' );
}
