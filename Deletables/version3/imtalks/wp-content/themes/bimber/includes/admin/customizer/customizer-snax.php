<?php
/**
 * Snax integration
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

$wp_customize->add_section( 'bimber_snax_section', array(
	'title'    => esc_html__( 'Snax', 'bimber' ),
	'panel'    => 'bimber_plugins_panel',
	'priority' => 500,
) );

// Header type.
$wp_customize->add_setting( $bimber_option_name . '[snax_header_type]', array(
	'default'           => $bimber_customizer_defaults['snax_header_type'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_snax_header_type', array(
	'label'    => esc_html__( 'Header on Submission Pages', 'bimber' ),
	'section'  => 'bimber_snax_section',
	'settings' => $bimber_option_name . '[snax_header_type]',
	'type'     => 'select',
	'choices'  => array(
		'normal'	=> esc_html__( 'Normal', 'bimber' ),
		'simple'	=> esc_html__( 'Simplified', 'bimber' ),
	),
) );

// Header "Create" button visibility.
$wp_customize->add_setting( $bimber_option_name . '[snax_header_create_button_visibility]', array(
	'default'           => $bimber_customizer_defaults['snax_header_create_button_visibility'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_snax_header_create_button_visibility', array(
	'label'    => esc_html__( 'Show "Create" button', 'bimber' ),
	'section'  => 'bimber_snax_section',
	'settings' => $bimber_option_name . '[snax_header_create_button_visibility]',
	'type'     => 'select',
	'choices'  => array(
		'all'		=> esc_html__( 'for all', 'bimber' ),
		'logged_in'	=> esc_html__( 'for logged in users', 'bimber' ),
		'none'		=> esc_html__( 'no', 'bimber' ),
	),
) );

// Header "Create" button type.
$wp_customize->add_setting( $bimber_option_name . '[snax_header_create_button_type]', array(
	'default'           => $bimber_customizer_defaults['snax_header_create_button_type'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$all_formats = snax_get_formats();
$choices = array(
		'all'				=> esc_html__( 'Create (button)', 'bimber' ),
		'all_dropdown'		=> esc_html__( 'Create (dropdown)', 'bimber' ),
);
foreach ( $all_formats as $key => $format) {
	$choices[ $key ] = 'Create ' . $format['labels']['name'];
}

$wp_customize->add_control( 'bimber_snax_header_create_button_type', array(
	'label'    => esc_html__( '"Create" button type', 'bimber' ),
	'section'  => 'bimber_snax_section',
	'settings' => $bimber_option_name . '[snax_header_create_button_type]',
	'type'     => 'select',
	'choices'  => $choices,
) );

// Header "Create" button label.
$wp_customize->add_setting( $bimber_option_name . '[snax_header_create_button_label]', array(
	'default'           => $bimber_customizer_defaults['snax_header_create_button_label'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'sanitize_text_field',
) );

$wp_customize->add_control( 'bimber_snax_header_create_button_label', array(
	'label'       => esc_html__( '"Create" button label', 'bimber' ),
	'section'     => 'bimber_snax_section',
	'settings'    => $bimber_option_name . '[snax_header_create_button_label]',
	'type'        => 'text',
) );


// Single post "Voting box" order.
$wp_customize->add_setting( $bimber_option_name . '[post_voting_box_order]', array(
	'default'           => $bimber_customizer_defaults['post_voting_box_order'],
	'type'              => 'option',
	'capability'        => 'edit_theme_options',
	'sanitize_callback' => 'absint',
) );

$wp_customize->add_control( new Bimber_Customize_Sortable_Control( $wp_customize, 'bimber_post_voting_box_order', array(
	'label'     	=> esc_html__( 'Voting', 'bimber' ),
	'section'  		=> 'bimber_posts_single_section',
	'settings' 		=> $bimber_option_name . '[post_voting_box_order]',
	'group_id'		=> 'bimber_post_elements_order',
	'base_priority' => $bimber_elements_order_base_priority,
) ) );
