<?php
/**
 * WooCommerce integration
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

$bimber_option_name = bimber_get_theme_id();

$wp_customize->add_section( 'bimber_woocommerce_section', array(
	'title'    => esc_html__( 'WooCommerce', 'bimber' ),
	'panel'    => 'bimber_plugins_panel',
	'priority' => 700,
) );

// Hide cart.
$wp_customize->add_setting( $bimber_option_name . '[woocommerce_cart_visibility]', array(
	'default'           => $bimber_customizer_defaults['woocommerce_cart_visibility'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_woocommerce_cart_visibility', array(
	'label'    => esc_html__( 'Show cart in the navbar', 'bimber' ),
	'section'  => 'bimber_woocommerce_section',
	'settings' => $bimber_option_name . '[woocommerce_cart_visibility]',
	'type'     => 'select',
	'choices'  => array(
		'always'			=> esc_html__( 'always', 'bimber' ),
		'on_woocommerce'	=> esc_html__( 'on WooCommerce pages', 'bimber' ),
		'none'				=> esc_html__( 'no', 'bimber' ),
	),
) );

// Open in.
$wp_customize->add_setting( $bimber_option_name . '[woocommerce_affiliate_link_target]', array(
	'default'           => $bimber_customizer_defaults['woocommerce_affiliate_link_target'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_woocommerce_affiliate_link_target', array(
	'label'    => esc_html__( 'Open affiliate links', 'bimber' ),
	'section'  => 'bimber_woocommerce_section',
	'settings' => $bimber_option_name . '[woocommerce_affiliate_link_target]',
	'type'     => 'select',
	'choices'  => array(
		'_blank'		=> esc_html__( 'in a new window', 'bimber' ),
		'_self'			=> esc_html__( 'in the same window', 'bimber' ),
	),
) );
