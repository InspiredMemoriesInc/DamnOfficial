<?php
/**
 * Common Sponsor Functions
 *
 * @package AdAce.
 * @subpackage Sponsors.
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'init', 'adace_register_sponsor_taxonomy' );
/**
 * Register Sponsor taxonomy.
 */
function adace_register_sponsor_taxonomy() {
	// Labels for taxonomy.
	$labels = array(
		'name'                       => _x( 'Sponsors', 'taxonomy general name', 'adace' ),
		'singular_name'              => _x( 'Sponsor', 'taxonomy singular name', 'adace' ),
		'search_items'               => __( 'Search Sponsors', 'adace' ),
		'popular_items'              => __( 'Popular Sponsors', 'adace' ),
		'all_items'                  => __( 'All Sponsors', 'adace' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Sponsor', 'adace' ),
		'update_item'                => __( 'Update Sponsor', 'adace' ),
		'add_new_item'               => __( 'Add New Sponsor', 'adace' ),
		'new_item_name'              => __( 'New Sponsor Name', 'adace' ),
		'separate_items_with_commas' => __( 'Separate sponsors with commas', 'adace' ),
		'add_or_remove_items'        => __( 'Add or remove sponsors', 'adace' ),
		'choose_from_most_used'      => __( 'Choose from the most used sponsors', 'adace' ),
		'not_found'                  => __( 'No sponsors found.', 'adace' ),
		'menu_name'                  => __( 'Sponsors', 'adace' ),
	);
	// Args for post type.
	$args = array(
		'hierarchical'      => false,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => false,
		'public'            => false,
		'rewrite'           => array(
			'slug' => 'adace-sponsor',
		),
	);
	// Args for supported post type.
	$supported_post_types = array( 'post' );
	// Register taxonomy.
	register_taxonomy( 'adace-sponsor', apply_filters( 'adace_sponsor_post_types', $supported_post_types ), apply_filters( 'adace_sponsor_args', $args ) );
}

add_action( 'init', 'adace_register_sponsor_image_size' );
/**
 * Add Sponsor Sizes
 */
function adace_register_sponsor_image_size() {
	add_image_size( 'adace-sponsor', 9999, 48 );
	add_image_size( 'adace-sponsor-2x', 9999, 96 );
}
