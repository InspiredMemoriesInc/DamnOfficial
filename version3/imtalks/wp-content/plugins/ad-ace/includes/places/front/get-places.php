<?php
/**
 * Front Places Functions
 *
 * @package AdAce.
 * @subpackage Places.
 */

 /**
  * Get places list.
  *
  * @param string $category Category slug or empty.
  * @param bool   $simple If use featured image.
  * @param int    $highlighted Number of list elements to hightlight.
  * @param bool   $transparent If use semitransparent.
  */
function adace_get_places_list( $category = '', $simple = false, $highlighted = 2, $transparent = false ) {
	// Prepare args for loop.
	$places_args = array(
		'post_type'           => 'adace_place',
		'posts_per_page'      => -1,
		'post_status'         => 'publish',
		'ignore_sticky_posts' => true,
	);
	// Add category if we have one.
	if ( ! empty( $category ) ) {
		$places_args['tax_query'] = array(
			array(
				'taxonomy' => 'adace_place-category',
				'field'    => 'slug',
				'terms'    => $category,
			),
		);
	}
	// Use this filter to alter query args.
	$places_args = apply_filters( 'adace_places_widget_query_args', $places_args );
	// Build query.
	$places_query = new WP_Query( $places_args );
	// Output variable.
	$output = '';
	// Loop counter.
	$loop_counter = 1;
	if ( $places_query -> have_posts() ) {
		$output .= '<div class="adace-places-list ' . sanitize_html_class( $simple ? 'simple-list' : 'featured-list' ) . ' ' . sanitize_html_class( $transparent ? 'transparent' : '' ) . '">';
		while ( $places_query->have_posts() ) {
			$places_query->the_post();
			// Get place meta.
			$place_link      = get_post_meta( get_the_id(), 'adace_place_link', true );
			$place_nofollow  = get_post_meta( get_the_id(), 'adace_place_nofollow', true );
			$place_thumbnail_id = get_post_thumbnail_id();
			// Make output possible.
			$output .= '<a class="place' . ( $loop_counter <= intval( $highlighted ) ? ' highlighted' : '' ) . '" ' . ( $place_nofollow ? 'rel="nofollow"' : '' ) . ' href="' . esc_url( $place_link ) . '">';
			if ( $simple || ! $place_thumbnail_id ) {
				$output .= '<h2 class="g1-beta">' . get_the_title() . '</h2>';
			} else {
				$place_size = apply_filters( 'adace_place_size', 'original' );
				$output .= wp_get_attachment_image( $place_thumbnail_id, $place_size );
			}
			$output .= '</a>';
			// Inc counter.
			$loop_counter++;
		}
		$output .= '</div>';
		wp_reset_postdata();
	}
	// Return.
	return $output;
}
