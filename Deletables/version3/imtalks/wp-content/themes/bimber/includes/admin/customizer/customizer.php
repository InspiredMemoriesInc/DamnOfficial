<?php
/**
 * Register theme sections into the WP Customizer
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

add_action( 'customize_register',                   'bimber_customize_register' );
add_action( 'customize_preview_init',               'bimber_customizer_live_preview' );
add_action( 'customize_controls_enqueue_scripts',   'enqueue_customizer_scripts' );
add_action( 'wp_ajax_bimber_tag_search',            'bimber_ajax_tag_search' );

/**
 * Register theme options
 *
 * @param WP_Customize_Manager $wp_customize        WP Customizer instance.
 */
function bimber_customize_register( $wp_customize ) {

	// Load helpers.
	require_once BIMBER_INCLUDES_DIR . 'options.php';

	// Load custom controls classes.
	require_once 'lib/class-bimber-customize-html-control.php';
	require_once 'lib/class-bimber-customize-multi-checkbox-control.php';
	require_once 'lib/class-bimber-customize-multi-radio-control.php';
	require_once 'lib/class-bimber-customize-multi-select-control.php';
	require_once 'lib/class-bimber-customize-tag-select-control.php';
	require_once 'lib/class-bimber-customize-sortable-control.php';

	// Load defaults.
	require 'customizer-defaults.php';

	require_once 'customizer-site-identity.php';


	// Define design panel.
	$wp_customize->add_panel( 'bimber_home_panel', array(
		'title'    => esc_html__( 'Home', 'bimber' ),
		'priority' => 180,
	) );

	require_once 'customizer-home.php';

	// Define posts panel.
	$wp_customize->add_panel( 'bimber_posts_panel', array(
		'title'    => esc_html__( 'Posts', 'bimber' ),
		'priority' => 200,
	) );

	require_once 'customizer-posts-single.php';
	require_once 'customizer-posts-archive.php';
	require_once 'customizer-posts-global.php';
	require_once 'customizer-posts-nsfw.php';
	require_once 'customizer-posts-auto-load.php';

	require_once 'customizer-featured-entries.php';

	// Define desing panel.
	$wp_customize->add_panel( 'bimber_design_panel', array(
		'title'    => esc_html__( 'Design', 'bimber' ),
		'priority' => 220,
	) );

	require_once 'customizer-design-global.php';
	require_once 'customizer-design-header.php';
	require_once 'customizer-design-footer.php';

	require_once 'customizer-search.php';

	$wp_customize->get_section('custom_css')->priority = 999;

	// Define plugins panel.
	$wp_customize->add_panel( 'bimber_plugins_panel', array(
		'title'    => esc_html__( 'Plugin Integrations', 'bimber' ),
		'priority' => 500,
	) );

	// Mailchimp for WP.
	if ( bimber_can_use_plugin( 'mailchimp-for-wp/mailchimp-for-wp.php' ) ) {
		require_once 'customizer-newsletter.php';
	}

	// Snax.
	if ( bimber_can_use_plugin( 'snax/snax.php' ) ) {
		require_once 'customizer-snax.php';
	}

	// What's Your Reaction.
	if ( bimber_can_use_plugin( 'whats-your-reaction/whats-your-reaction.php' ) ) {
		require_once 'customizer-whats-your-reaction.php';
	}

	// WooCommerce.
	if ( bimber_can_use_plugin( 'woocommerce/woocommerce.php' ) ) {
		require_once 'customizer-woocommerce.php';
	}

	// Mashshare.
	if ( bimber_can_use_plugin( 'mashsharer/mashshare.php' ) ) {
		require_once 'customizer-mashsharer.php';
	}

	// G1 Socials.
	if ( bimber_can_use_plugin( 'g1-socials/g1-socials.php' ) ) {
		require_once 'customizer-g1-socials.php';
	}

	// BuddyPress.
	if ( bimber_can_use_plugin( 'buddypress/bp-loader.php' ) ) {
		require_once 'customizer-buddypress.php';
	}

	// Visual Composer.
	require_once 'customizer-visual-composer.php';
}

/**
 * Force theme to use head inline css (for dynamic styles) in WP Customize Preview mode
 */
function bimber_customizer_live_preview() {
	add_filter( 'bimber_dynamic_style_type', 'bimber_use_internal_dynamic_style_in_customizer_preview' );
	add_filter( 'transient_bimber_featured_entries_query', '__return_false', 99 );
}

/**
 * Return dynamic style type used in live preview
 *
 * @return string
 */
function bimber_use_internal_dynamic_style_in_customizer_preview() {
	return 'internal';
}

/**
 * Return list of categories
 *
 * @return array
 */
function bimber_customizer_get_category_choices() {
	$choices    = array();
	$categories = get_categories( 'hide_empty=0' );

	foreach ( $categories as $category_obj ) {
		$choices[ $category_obj->slug ] = $category_obj->name;
	}

	return $choices;
}

/**
 * Return list of tags
 *
 * @return array
 */
function bimber_customizer_get_tag_choices() {
	$choices = array();
	$tags    = get_tags( 'hide_empty=0' );

	$choices[''] = esc_html__( '- None -', 'bimber' );

	foreach ( $tags as $tag_obj ) {
		$choices[ $tag_obj->slug ] = $tag_obj->name;
	}

	return apply_filters( 'bimber_customizer_tag_choices', $choices );
}

/**
 * Sanitize value of multi-choice control
 *
 * @param array $input   List of choices.
 *
 * @return array
 */
function bimber_sanitize_multi_choice( $input ) {
	return $input;
}

function bimber_customizer_get_product_category_choices() {
	$terms = get_terms( 'product_cat', array(
		'hide_empty' => false,
	) );

	$choices[''] = esc_html__( '- None -', 'bimber' );

	if ( ! is_wp_error( $terms ) ) {
		foreach ( $terms as $term_obj ) {
			$choices[ $term_obj->slug ] = $term_obj->name;
		}
	}

	return apply_filters( 'bimber_customizer_product_category_choices', $choices );
}

/**
 * Enqueue customizer scripts
 *
 * @return void
 */
function enqueue_customizer_scripts() {
	wp_enqueue_script( 'tags-box' );
}

