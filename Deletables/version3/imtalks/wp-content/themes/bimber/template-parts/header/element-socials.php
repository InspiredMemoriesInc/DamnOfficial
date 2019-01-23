<?php
/**
 * The Template for displaying The dropable social media profile icons.
 *
 * @package Bimber_Theme 4.10
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}
?>
<?php
	if ( bimber_can_use_plugin( 'g1-socials/g1-socials.php' ) ) {
		if ( 'header_drop' === bimber_get_theme_option( 'header', 'social_icons' ) ) {
			get_template_part( 'template-parts/header/drop-socials' );
		} elseif ( 'header_full' === bimber_get_theme_option( 'header', 'social_icons' ) ) {
			get_template_part( 'template-parts/header/full-socials' );
		}
	}