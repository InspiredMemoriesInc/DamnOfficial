<?php
/**
 * Common Places Functions
 *
 * @package AdAce.
 * @subpackage Sponsors.
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'init', 'adace_register_places_post_type' );
/**
 * Register link post type
 */
function adace_register_places_post_type() {
	// Labels array.
	$labels = array(
		'name'               => _x( 'Places', 'post type general name', 'adace' ),
		'singular_name'      => _x( 'Place', 'post type singular name', 'adace' ),
		'menu_name'          => _x( 'Places', 'admin menu', 'adace' ),
		'name_admin_bar'     => _x( 'Place', 'add new on admin bar', 'adace' ),
		'add_new'            => _x( 'Add New', 'place', 'adace' ),
		'add_new_item'       => __( 'Add New Place', 'adace' ),
		'new_item'           => __( 'New Place', 'adace' ),
		'edit_item'          => __( 'Edit Place', 'adace' ),
		'view_item'          => __( 'Show Place', 'adace' ),
		'all_items'          => __( 'All Places', 'adace' ),
		'search_items'       => __( 'Look for places', 'adace' ),
		'parent_item_colon'  => __( 'Parent place', 'adace' ),
		'not_found'          => __( 'Place not found', 'adace' ),
		'not_found_in_trash' => __( 'Place not found in trash', 'adace' ),
	);
	// Args array.
	$args = array(
		'labels'             => $labels,
		'description'        => __( 'Promoted places on the internet.', 'adace' ),
		'public'             => false,
		'publicly_queryable' => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'menu_icon'          => 'dashicons-networking',
		'query_var'          => true,
		'rewrite'            => array(
			'slug' => 'link',
		),
		'capability_type' => 'post',
		'has_archive'     => false,
		'hierarchical'    => false,
		'menu_position'   => null,
		'supports'        => array(
			'title',
			'thumbnail',
		),
	);
	// Register post type.
	register_post_type( 'adace_place', $args );
}

add_action( 'init', 'adace_register_places_taxonomy' );
/**
 * Register Sponsor taxonomy.
 */
function adace_register_places_taxonomy() {
	// Labels for post type.
	$labels = array(
		'name'                       => _x( 'Categories', 'taxonomy general name', 'adace' ),
		'singular_name'              => _x( 'Category', 'taxonomy singular name', 'adace' ),
		'search_items'               => __( 'Search Categories', 'adace' ),
		'popular_items'              => __( 'Popular Categories', 'adace' ),
		'all_items'                  => __( 'All Categories', 'adace' ),
		'parent_item'                => null,
		'parent_item_colon'          => null,
		'edit_item'                  => __( 'Edit Category', 'adace' ),
		'update_item'                => __( 'Update Category', 'adace' ),
		'add_new_item'               => __( 'Add New Category', 'adace' ),
		'new_item_name'              => __( 'New Category Name', 'adace' ),
		'separate_items_with_commas' => __( 'Separate categories with commas', 'adace' ),
		'add_or_remove_items'        => __( 'Add or remove categories', 'adace' ),
		'choose_from_most_used'      => __( 'Choose from the most used categories', 'adace' ),
		'not_found'                  => __( 'No categories found.', 'adace' ),
		'menu_name'                  => __( 'Categories', 'adace' ),
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
			'slug' => 'adace_place-category',
		),
	);
	// Args for supported post type.
	$supported_post_types = array( 'adace_place' );
	// Register taxonomy.
	register_taxonomy( 'adace_place-category', $supported_post_types, $args );
}
