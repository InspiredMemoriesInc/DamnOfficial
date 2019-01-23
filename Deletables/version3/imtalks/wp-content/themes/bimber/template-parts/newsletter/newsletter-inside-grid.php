<?php
/**
 * The template part for a newsletter sign-up form inside a grid collection.
 *
 * @package Bimber_Theme 4.10
 */

?>
<li class="g1-collection-item g1-collection-item-1of3">
	<?php if ( bimber_can_use_plugin( 'mailchimp-for-wp/mailchimp-for-wp.php' ) ) : ?>

		<aside class="g1-box g1-newsletter">
			<i class="g1-box-icon"></i>

			<header>
				<h3 class="g1-delta g1-delta-2nd"><?php esc_html_e( 'Newsletter', 'bimber' ); ?></h3>
			</header>

			<?php echo do_shortcode( '[mc4wp_form]' ); ?>
		</aside>

	<?php else : ?>

		<?php get_template_part( 'template-parts/newsletter/notice-plugin-required' ); ?>

	<?php endif; ?>
</li>
