<?php
/**
 * The Template for displaying the off-canvas area.
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme 5.0
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}
?>

<div class="g1-canvas g1-canvas-global">
	<a class="g1-canvas-toggle" href="#"></a>
	<div class="g1-canvas-content">
		<?php
		add_filter( 'bimber_ajax_search', '__return_false', 99 );
		get_search_form();
		remove_filter( 'bimber_ajax_search', '__return_false', 99 );
		?>

		<!-- BEGIN .g1-primary-nav -->
		<?php
		if ( has_nav_menu( 'bimber_primary_nav' ) ) :
			wp_nav_menu( array(
				'theme_location'  => 'bimber_primary_nav',
				'container'       => 'nav',
				'container_class' => 'g1-primary-nav',
				'container_id'    => 'g1-canvas-primary-nav',
				'menu_class'      => 'g1-primary-nav-menu',
				'menu_id'         => 'g1-canvas-primary-nav-menu',
				'depth'           => 0,
			) );
		endif;
		?>
		<!-- END .g1-primary-nav -->

		<?php if ( bimber_can_use_plugin( 'snax/snax.php' ) ) : ?>
			<?php if ( snax_show_create_button() ): ?>
				<?php
				$snax_class = array(
					'g1-button',
					'g1-button-m',
					'g1-button-solid',
					'snax-button',
					'snax-button-create',
				);
				$url = snax_get_frontend_submission_page_url();
				$url_type = bimber_get_theme_option( 'snax', 'header_create_button_type' );
				if ( 'ranked_list' === $url_type ) {
					$url_type = 'list&type=ranked';
				}
				if ( 'list' === $url_type ) {
					$url_type = 'list';
				}
				if ( 'classic_list' === $url_type ) {
					$url_type = 'list&type=classic';
				}
				if ( 'all' !== $url_type && 'all_dropdown' !== $url_type ) {
					if ( strpos( $url, '?' ) !== false ) {
						$url .= '&snax_format=' . $url_type;
					} else {
						$url .= '?snax_format=' . $url_type;
					}
				}
				?>
				<a class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $snax_class ) ); ?>"
				href="<?php echo esc_url( $url ); ?>"><?php echo esc_html( bimber_get_theme_option( 'snax', 'header_create_button_label' ) ); ?></a>
				<?php endif; ?>
		<?php endif; ?>


		<?php get_template_part( 'template-parts/nav-quick' ); ?>

		<?php
		// @todo
		//get_template_part( 'template-parts/nav-user' );
		?>

		<!-- BEGIN .g1-secondary-nav -->
		<?php
		if ( has_nav_menu( 'bimber_secondary_nav' ) ) :
			wp_nav_menu( array(
				'theme_location'  => 'bimber_secondary_nav',
				'container'       => 'nav',
				'container_class' => 'g1-secondary-nav',
				'container_id'    => 'g1-canvas-secondary-nav',
				'menu_class'      => 'g1-secondary-nav-menu',
				'menu_id'         => 'g1-canvas-secondary-nav-menu',
				'depth'           => 0,
			) );
		endif;
		?>
		<!-- END .g1-secondary-nav -->

		<?php do_action( 'bimber_wpml_add_language_selector' ); ?>

		<?php get_template_part( 'template-parts/header/full-socials' ); ?>

	</div>
</div>
