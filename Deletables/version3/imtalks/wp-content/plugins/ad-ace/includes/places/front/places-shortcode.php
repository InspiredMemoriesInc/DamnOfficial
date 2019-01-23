<?php
/**
 * Places Shortcode
 *
 * @package AdAce.
 * @subpackage Places.
 */

add_shortcode( 'adace_places', 'adace_places_shortcode' );
/**
 * Snapcode shortcode
 *
 * @param array $atts Snapcode shortcode atts.
 * @return string HTML
 */
function adace_places_shortcode( $atts ) {
	// Fill shortcode atts.
	$atts_filled = shortcode_atts(
		array(
			'title'       => '',
			'category'    => '',
			'simple'      => false,
			'highlighted' => 2,
			'transparent' => false,
		),
		$atts,
		'adace_places'
	);
	// Sanitize atts.
	$category    = filter_var( $atts_filled['category'], FILTER_SANITIZE_STRING );
	$simple      = filter_var( $atts_filled['simple'], FILTER_VALIDATE_BOOLEAN );
	$highlighted = filter_var( $atts_filled['highlighted'], FILTER_SANITIZE_NUMBER_INT );
	$transparent = filter_var( $atts_filled['transparent'], FILTER_VALIDATE_BOOLEAN );
	// Get output.
	$output      = '';
	$places_list = adace_get_places_list( $category, $simple, $highlighted, $transparent );
	if ( ! empty( $places_list ) ) {
		$output = '<div class="csstodo-places-wrapper adace-places-shortcode">';
		if ( ! empty( $atts_filled['title'] ) ) {
			$output .= '<h3 class="g1-gamma g1-gamma-1st">' . wp_kses_post( $atts_filled['title'] ) . '</h3>';
		}
		$output .= adace_get_places_list( $category, $simple, $highlighted );
		$output .= '</div>';
	}
	// Return.
	return $output;
}
