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
if ( apply_filters( 'bimber_show_preheader_socials', true ) && bimber_can_use_plugin( 'g1-socials/g1-socials.php' ) ) {
	echo do_shortcode( '[g1_socials icon_size="32" icon_color="text"]' );
}
