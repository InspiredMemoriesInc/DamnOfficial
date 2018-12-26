<?php
/**
 * The template part for displaying a newsletter sign-up form inside a list collection.
 *
 * @package Bimber_Theme 4.10
 */

?>
<li class="g1-collection-item">
	<?php if ( bimber_can_use_plugin( 'mailchimp-for-wp/mailchimp-for-wp.php' ) ) : ?>

		<aside class="g1-box g1-newsletter g1-newsletter-horizontal">
			<i class="g1-box-icon"></i>

			<header>
				<h2 class="g1-delta g1-delta-2nd"><?php esc_html_e( 'Newsletter', 'bimber' ); ?></h2>
			</header>

			<h3 class="g1-alpha g1-alpha-1st"><?php echo esc_html( bimber_get_theme_option( 'newsletter', 'title' ) ); ?></h3>
			<p class="g1-delta g1-delta-3rd"><?php echo esc_html( bimber_get_theme_option( 'newsletter', 'subtitle' ) ); ?></p>

			<?php
			remove_filter( 'mc4wp_form_before_fields', 'bimber_mc4wp_form_before_form', 10, 2 );
			echo do_shortcode( '[mc4wp_form]' );
			add_filter( 'mc4wp_form_before_fields', 'bimber_mc4wp_form_before_form', 10, 2 );
			?>
		</aside>

	<?php else : ?>

		<?php get_template_part( 'template-parts/newsletter/notice-plugin-required' ); ?>

	<?php endif; ?>
</li>
