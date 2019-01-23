<?php
/**
 * WP Customizer panel section to handle header design options
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

$wp_customize->add_section( 'bimber_design_header_section', array(
	'title'    => esc_html__( 'Header', 'bimber' ),
	'priority' => 40,
	'panel'    => 'bimber_design_panel',
) );


// Composition.
$wp_customize->add_setting( $bimber_option_name . '[header_composition]', array(
	'default'           => $bimber_customizer_defaults['header_composition'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( new Bimber_Customize_Multi_Radio_Control( $wp_customize, 'bimber_header_composition', array(
	'label'    => esc_html__( 'Composition', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_composition]',
	'type'     => 'select',
	'choices'  => array(
		'original'  => array(
			'label'	=> esc_html__( 'Logo on left, menu below', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-01.png',
		),
		'gag'       => array(
			'label'	=> esc_html__( 'Logo + header, same line (full width)', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-02.png',
		),
		'05'  => array(
			'label'	=> esc_html__( '05', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-05.png',
		),
		'smiley'    => array(
			'label'	=> esc_html__( 'Logo + header, same line', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-03.png',
		),
		'07'  => array(
			'label'	=> esc_html__( '07', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-07.png',
		),
		'hardcore'  => array(
			'label'	=> esc_html__( 'Menu on left, logo below', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-04.png',
		),
		'06'  => array(
			'label'	=> esc_html__( '06', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-06.png',
		),
		'bunchy'       => array(
			'label'	=> esc_html__( 'Bunchy', 'bimber' ),
			'path'	=> BIMBER_ADMIN_DIR_URI . 'customizer/images/header-composition-bunchy.png',
		),
	),
) ) );

// Mobile composition.
$wp_customize->add_setting( $bimber_option_name . '[header_mobile_composition]', array(
	'default'           => $bimber_customizer_defaults['header_mobile_composition'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_header_mobile_composition', array(
	'label'    => esc_html__( 'Mobile Composition', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_mobile_composition]',
	'type'     => 'select',
	'choices'  => array(
		'01'  => esc_html__( 'Logo on left', 'bimber' ),
		'02'  => esc_html__( 'Logo centered', 'bimber' ),
	),
) );

// Sticky header.
$wp_customize->add_setting( $bimber_option_name . '[header_sticky]', array(
	'default'           => $bimber_customizer_defaults['header_sticky'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_header_sticky', array(
	'label'    => esc_html__( 'Sticky Header', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_sticky]',
	'type'     => 'select',
	'choices'  => array(
		'standard'  => esc_html__( 'enabled', 'bimber' ),
		'none'      => esc_html__( 'disabled', 'bimber' ),
	),
) );

// Logo Margin Top.
$wp_customize->add_setting( $bimber_option_name . '[header_logo_margin_top]', array(
	'default'           => $bimber_customizer_defaults['header_logo_margin_top'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );
$wp_customize->add_control( 'bimber_header_logo_margin_top', array(
	'label'    => esc_html__( 'Logo Margin Top', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_logo_margin_top]',
	'type'     => 'number',
) );

// Logo Margin Bottom.
$wp_customize->add_setting( $bimber_option_name . '[header_logo_margin_bottom]', array(
	'default'           => $bimber_customizer_defaults['header_logo_margin_bottom'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_header_logo_margin_bottom', array(
	'label'    => esc_html__( 'Logo Margin Bottom', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_logo_margin_bottom]',
	'type'     => 'number',
) );




// Quick Nav Margin Top.
$wp_customize->add_setting( $bimber_option_name . '[header_quicknav_margin_top]', array(
	'default'           => $bimber_customizer_defaults['header_quicknav_margin_top'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );
$wp_customize->add_control( 'bimber_header_quicknav_margin_top', array(
	'label'    => esc_html__( 'Quick Nav Margin Top', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_quicknav_margin_top]',
	'type'     => 'number',
) );

// Quick Nav Margin Bottom.
$wp_customize->add_setting( $bimber_option_name . '[header_quicknav_margin_bottom]', array(
	'default'           => $bimber_customizer_defaults['header_quicknav_margin_bottom'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );
$wp_customize->add_control( 'bimber_header_quicknav_margin_bottom', array(
	'label'    => esc_html__( 'Quick Nav Margin Bottom', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_quicknav_margin_bottom]',
	'type'     => 'number',
) );

// Quick Nav Labels Visibility.
$wp_customize->add_setting( $bimber_option_name . '[header_quicknav_labels]', array(
	'default'           => $bimber_customizer_defaults['header_quicknav_labels'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );
$wp_customize->add_control( 'bimber_header_quicknav_labels', array(
	'label'    => esc_html__( 'Quick Nav Labels', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_quicknav_labels]',
	'type'     => 'select',
	'choices'     => array(
		'standard'      => esc_html__( 'show', 'bimber' ),
		'none'          => esc_html__( 'hide', 'bimber' ),
	),
) );


// Text Color.
$wp_customize->add_setting( $bimber_option_name . '[header_text_color]', array(
'default'           => $bimber_customizer_defaults['header_text_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_text_color', array(
	'label'    => esc_html__( 'Text', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_text_color]',
	'priority' => 100,
) ) );

// Accent Color.
$wp_customize->add_setting( $bimber_option_name . '[header_accent_color]', array(
	'default'           => $bimber_customizer_defaults['header_accent_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_accent_color', array(
	'label'    => esc_html__( 'Accent', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_accent_color]',
	'priority' => 100,
) ) );

// Background Color.
$wp_customize->add_setting( $bimber_option_name . '[header_background_color]', array(
	'default'           => $bimber_customizer_defaults['header_background_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_background_color', array(
	'label'    => esc_html__( 'Background', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_background_color]',
	'priority' => 100,
) ) );

// Optional Gradient Color.
$wp_customize->add_setting( $bimber_option_name . '[header_bg2_color]', array(
	'default'           => $bimber_customizer_defaults['header_bg2_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_bg2_color', array(
	'label'    => esc_html__( 'Optional Gradient Color', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_bg2_color]',
	'priority' => 100,
) ) );

// Optional Border Color.
$wp_customize->add_setting( $bimber_option_name . '[header_border_color]', array(
	'default'           => $bimber_customizer_defaults['header_border_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_border_color', array(
	'label'    => esc_html__( 'Optional Border Color', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_border_color]',
	'priority' => 100,
) ) );




// Preheader Text Color.
$wp_customize->add_setting( $bimber_option_name . '[preheader_text_color]', array(
	'default'           => $bimber_customizer_defaults['preheader_text_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_preheader_text_color', array(
	'label'    => esc_html__( 'Preheader Text', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[preheader_text_color]',
	'priority' => 100,
) ) );

// Preheader Accent Color.
$wp_customize->add_setting( $bimber_option_name . '[preheader_accent_color]', array(
	'default'           => $bimber_customizer_defaults['preheader_accent_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_preheader_accent_color', array(
	'label'    => esc_html__( 'Preheader Accent', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[preheader_accent_color]',
	'priority' => 100,
) ) );

// Preheader Background Color.
$wp_customize->add_setting( $bimber_option_name . '[preheader_background_color]', array(
	'default'           => $bimber_customizer_defaults['preheader_background_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_preheader_background_color', array(
	'label'    => esc_html__( 'Preheader Background', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[preheader_background_color]',
	'priority' => 100,
) ) );

// Preheader Optional Gradient Color.
$wp_customize->add_setting( $bimber_option_name . '[preheader_bg2_color]', array(
	'default'           => $bimber_customizer_defaults['preheader_bg2_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_preheader_bg2_color', array(
	'label'    => esc_html__( 'Preheader Optional Gradient Color', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[preheader_bg2_color]',
	'priority' => 100,
) ) );

// Preheader Optional Border Color.
$wp_customize->add_setting( $bimber_option_name . '[preheader_border_color]', array(
	'default'           => $bimber_customizer_defaults['preheader_border_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_preheader_border_color', array(
	'label'    => esc_html__( 'Preheader Optional Border Color', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[preheader_border_color]',
	'priority' => 100,
) ) );




// Navbar Background Color.
$wp_customize->add_setting( $bimber_option_name . '[header_navbar_background_color]', array(
	'default'           => $bimber_customizer_defaults['header_navbar_background_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_navbar_background_color', array(
	'label'    => esc_html__( 'Navbar Background', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_navbar_background_color]',
	'priority' => 100,
) ) );

// Navbar Text Color.
$wp_customize->add_setting( $bimber_option_name . '[header_navbar_text_color]', array(
	'default'           => $bimber_customizer_defaults['header_navbar_text_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_navbar_text_color', array(
	'label'    => esc_html__( 'Navbar Text', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_navbar_text_color]',
	'priority' => 100,
) ) );

// Navbar Accent Color.
$wp_customize->add_setting( $bimber_option_name . '[header_navbar_accent_color]', array(
	'default'           => $bimber_customizer_defaults['header_navbar_accent_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_navbar_accent_color', array(
	'label'    => esc_html__( 'Navbar Accent', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_navbar_accent_color]',
	'priority' => 100,
) ) );

// Submenu Background Color.
$wp_customize->add_setting( $bimber_option_name . '[header_submenu_background_color]', array(
	'default'           => $bimber_customizer_defaults['header_submenu_background_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_submenu_background_color', array(
	'label'    => esc_html__( 'Submenu Background', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_submenu_background_color]',
	'priority' => 100,
) ) );

// Submenu Text Color.
$wp_customize->add_setting( $bimber_option_name . '[header_submenu_text_color]', array(
	'default'           => $bimber_customizer_defaults['header_submenu_text_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_submenu_text_color', array(
	'label'    => esc_html__( 'Submenu Text', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_submenu_text_color]',
	'priority' => 100,
) ) );

// Submenu Accent Color.
$wp_customize->add_setting( $bimber_option_name . '[header_submenu_accent_color]', array(
	'default'           => $bimber_customizer_defaults['header_submenu_accent_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_submenu_accent_color', array(
	'label'    => esc_html__( 'Submenu Accent', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_submenu_accent_color]',
	'priority' => 100,
) ) );



// Navbar Secondary Background Color.
$wp_customize->add_setting( $bimber_option_name . '[header_navbar_secondary_background_color]', array(
	'default'           => $bimber_customizer_defaults['header_navbar_secondary_background_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_navbar_secondary_background_color', array(
	'label'    => esc_html__( 'Button Background', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_navbar_secondary_background_color]',
	'priority' => 100,
) ) );

// Navbar Secondary Text Color.
$wp_customize->add_setting( $bimber_option_name . '[header_navbar_secondary_text_color]', array(
	'default'           => $bimber_customizer_defaults['header_navbar_secondary_text_color'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_hex_color',
) );
$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bimber_header_navbar_secondary_text_color', array(
	'label'    => esc_html__( 'Button Text', 'bimber' ),
	'section'  => 'bimber_design_header_section',
	'settings' => $bimber_option_name . '[header_navbar_secondary_text_color]',
	'priority' => 100,
) ) );
