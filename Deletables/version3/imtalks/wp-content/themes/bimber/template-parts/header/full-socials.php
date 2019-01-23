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

<?php if ( bimber_can_use_plugin( 'g1-socials/g1-socials.php' ) ) : ?>
	<?php echo do_shortcode( '[g1_socials icon_size="48" icon_color="text"]' ); ?>
<?php endif; ?>
