<?php
/**
 * The Preheader.
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme 4.10
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}
?>
<?php
	$bimber_class = array(
		'g1-row',
		'g1-row-layout-page',
		'g1-preheader',
		'g1-preheader-' . bimber_get_theme_option('header', 'composition' ),
	);
?>
<div class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $bimber_class ) ); ?>">
	<div class="g1-row-inner">

		<div class="g1-column g1-dropable">

			<!-- BEGIN .g1-secondary-nav -->
			<?php
			if ( has_nav_menu( 'bimber_secondary_nav' ) ) :
				wp_nav_menu( array(
					'theme_location'  => 'bimber_secondary_nav',
					'container'       => 'nav',
					'container_class' => 'g1-secondary-nav',
					'container_id'    => 'g1-secondary-nav',
					'menu_class'      => 'g1-secondary-nav-menu',
					'menu_id'         => 'g1-secondary-nav-menu',
					'depth'           => 1,
				) );
			endif;
			?>
			<!-- END .g1-secondary-nav -->

			<?php get_template_part( 'template-parts/preheader/element-socials' ); ?>

			<?php do_action( 'wpml_add_language_selector' ); ?>
		</div>

	</div>

	<div class="g1-row-background">
	</div>
</div><!-- .g1-preheader -->
