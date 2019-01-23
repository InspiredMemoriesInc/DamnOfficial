<?php
/**
 * Bimber Theme functions and definitions
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme 4.10
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

define( 'BIMBER_THEME_DIR',         trailingslashit( get_template_directory() ) );
define( 'BIMBER_THEME_DIR_URI',     trailingslashit( get_template_directory_uri() ) );
define( 'BIMBER_INCLUDES_DIR',      trailingslashit( get_template_directory() ) . 'includes/' );
define( 'BIMBER_ADMIN_DIR',         trailingslashit( get_template_directory() ) . 'includes/admin/' );
define( 'BIMBER_ADMIN_DIR_URI',     trailingslashit( get_template_directory_uri() ) . 'includes/admin/' );
define( 'BIMBER_FRONT_DIR',         trailingslashit( get_template_directory() ) . 'includes/front/' );
define( 'BIMBER_FRONT_DIR_URI',     trailingslashit( get_template_directory_uri() ) . 'includes/front/' );
define( 'BIMBER_PLUGINS_DIR',       trailingslashit( get_template_directory() ) . 'includes/plugins/' );
define( 'BIMBER_PLUGINS_DIR_URI',   trailingslashit( get_template_directory_uri() ) . 'includes/plugins/' );

// Load common resources (required by both, admin and front, contexts).
require_once( BIMBER_INCLUDES_DIR . 'functions.php' );

// Load context resources.
if ( is_admin() ) {
	require_once( BIMBER_ADMIN_DIR . 'functions.php' );
} else {
	require_once( BIMBER_FRONT_DIR . 'functions.php' );
}


add_filter( 'img_caption_shortcode_width', 'bimber_img_caption_shortcode_width', 11, 3 );
function bimber_img_caption_shortcode_width( $width, $atts, $content ) {
	if ( 'aligncenter' === $atts['align'] ) {
		$width = 0;
	}

	return $width;
}

