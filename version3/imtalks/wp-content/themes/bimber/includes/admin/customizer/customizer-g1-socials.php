<?php
/**
 * G1 Socials integration
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

// Mobile composition.
$wp_customize->add_setting( $bimber_option_name . '[header_social_icons]', array(
	'default'           => $bimber_customizer_defaults['header_social_icons'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_header_social_icons', array(
	'label'    => esc_html__( 'Social Icons', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_social_icons]',
	'type'     => 'select',
	'choices'  => array(
		'preheader_drop'    => esc_html__( 'in Preheader, as dropdown', 'bimber' ),
		'preheader_full'    => esc_html__( 'in Preheader, as list', 'bimber' ),
		'header_drop'       => esc_html__( 'in Header, as dropdown', 'bimber' ),
		'header_full'       => esc_html__( 'in Header, as list', 'bimber' ),
	),
	'priority' => 90,
) );
