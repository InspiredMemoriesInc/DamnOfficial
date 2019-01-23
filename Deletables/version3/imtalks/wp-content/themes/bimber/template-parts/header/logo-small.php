<?php
/**
 * The template part for displaying the small logo.
 *
 * @package Bimber_Theme 4.10
 */

?>
<?php $bimber_small_logo = bimber_get_small_logo(); ?>
<?php if ( ! empty( $bimber_small_logo ) ) : ?>
	<a class="g1-logo-small-wrapper" href="<?php echo esc_url( home_url( '/' ) ); ?>">
		<?php
		printf(
			'<img class="g1-logo-small" width="%d" height="%d" src="%s" %s alt="%s" />',
			absint( $bimber_small_logo['width'] ),
			absint( $bimber_small_logo['height'] ),
			esc_url( $bimber_small_logo['src'] ),
			isset( $bimber_small_logo['srcset'] ) ? sprintf( 'srcset="%s"', esc_attr( $bimber_small_logo['srcset'] ) ) : '',
			""
		);
		?>
	</a>
<?php endif; ?>