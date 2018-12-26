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

<?php if ( apply_filters( 'bimber_show_preheader_socials', true ) && bimber_can_use_plugin( 'g1-socials/g1-socials.php' ) ) : ?>
	<div class="g1-drop g1-drop-the-socials">
		<a class="g1-drop-toggle" href="#" title="<?php esc_attr_e( 'Follow us', 'bimber' ); ?>">
			<i class="g1-drop-toggle-icon"></i> <?php esc_html_e( 'Follow us', 'bimber' ); ?>
			<span class="g1-drop-toggle-arrow"></span>
		</a>
		<div class="g1-drop-content">
			<?php echo do_shortcode( '[g1_socials icon_size="48" icon_color="text"]' ); ?>
		</div>
	</div>
<?php endif;
