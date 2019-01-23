<?php
/**
 * The Template for displaying The dropable search box.
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
<?php if ( apply_filters( 'bimber_show_navbar_searchform', true ) ) : ?>
	<div class="g1-drop g1-drop-before g1-drop-the-search">
		<a class="g1-drop-toggle" href="<?php echo esc_url( home_url( '/?s=' ) ); ?>">
			<i class="g1-drop-toggle-icon"></i><?php esc_html_e( 'Search', 'bimber' ); ?>
			<span class="g1-drop-toggle-arrow"></span>
		</a>
		<div class="g1-drop-content">
			<?php get_search_form( true ); ?>
		</div>
	</div>
<?php endif;
