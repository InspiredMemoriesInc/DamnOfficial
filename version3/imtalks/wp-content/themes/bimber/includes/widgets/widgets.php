<?php
/**
 * Widgets
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


function bimber_wp_register_sidebar_widget( $widget ) {
	$arr = array(
		'WP_Widget_Meta',
		'WP_Widget_Pages',
		'WP_Widget_Archives',
		'WP_Widget_Categories',
	);

	foreach ( $arr as $name ) {
		if ( $widget['callback'][0] instanceof $name ) {
			$widget['callback'][0]->widget_options['classname'] .= ' g1-links';
			break;
		}
	}
}


/**
 * Init widgets
 */
function bimber_widgets_init() {
	register_widget( 'Bimber_Widget_Posts' );
	register_widget( 'Bimber_Widget_Sticky_Start_Point' );
}

/**
 * Render closing tag for sticky sidebar wrapper
 *
 * @param int $sidebar_index    Sidebar index.
 */
function bimber_close_sticky_sidebar_wrapper( $sidebar_index ) {
	if ( is_admin() ) {
		return;
	}

	$sticky_sidebar_opened = false;
	$sidebars_widgets      = wp_get_sidebars_widgets();

	if ( isset( $sidebars_widgets[ $sidebar_index ] ) ) {
		$widgets = $sidebars_widgets[ $sidebar_index ];

		// Check if sticky start point was added to sidebar.
		foreach ( $widgets as $widget ) {
			if ( strpos( $widget, 'bimber_sticky_start_point_widget' ) !== false ) {
				$sticky_sidebar_opened = true;
				break;
			}
		}
	}

	// If sticky wrapper opened we need to close it.
	if ( $sticky_sidebar_opened ) {
		echo '</div>';
	}
}

