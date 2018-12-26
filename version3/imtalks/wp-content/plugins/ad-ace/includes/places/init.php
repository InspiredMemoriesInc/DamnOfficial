<?php
/**
 * Init Places
 *
 * @package AdAce.
 * @subpackage Places.
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}


// Add Patreon support.
add_action( 'init', 'adace_load_places', 0 );
function adace_load_places() {
	if ( apply_filters( 'adace_support_places', false ) ) {
		// Admin.
		if ( is_admin() ) {
			require_once( trailingslashit( adace_get_plugin_dir() ) . 'includes/places/admin/meta-boxes.php' );
		}
		// Commons.
		require_once( trailingslashit( adace_get_plugin_dir() ) . 'includes/places/common/register.php' );
		require_once( trailingslashit( adace_get_plugin_dir() ) . 'includes/places/common/class-adace-places-widget.php' );
		// Front.
		if ( ! is_admin() ) {
			require_once( trailingslashit( adace_get_plugin_dir() ) . 'includes/places/front/get-places.php' );
			require_once( trailingslashit( adace_get_plugin_dir() ) . 'includes/places/front/places-shortcode.php' );
		}
	}
}
