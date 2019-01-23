<?php
/**
 * The Template for displaying collection title.
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
$bimber_class = array(
	'g1-delta',
	'g1-delta-2nd',
	'g1-collection-title',
);

if ( bimber_get_theme_option( 'home', 'title_hide' ) ) {
	$bimber_class[] = 'screen-reader-text';
}
?>
<h2 class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $bimber_class ) ); ?>"><?php echo esc_html( bimber_get_home_title() ); ?></h2>
