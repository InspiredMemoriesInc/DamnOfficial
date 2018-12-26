<?php

$bimber_entry_data = bimber_get_template_part_data();
$bimber_elements   = $bimber_entry_data['elements'];
?>

<article <?php post_class( 'entry-tpl-tile entry-tpl-tile-xl g1-dark' ); ?>>

	<?php if ( bimber_can_use_plugin( 'snax/snax.php' ) ) : ?>
		<?php if ( snax_is_format( 'list' ) && 'bunchy' === bimber_get_theme_option( 'global', 'stack' ) ) : ?>
			<a class="entry-badge entry-badge-open-list" href="<?php the_permalink(); ?>"><?php esc_html_e( 'Open list', 'bimber' ); ?></a>
		<?php endif; ?>
	<?php endif; ?>

	<?php
		bimber_render_open_list_badge();
		bimber_render_entry_featured_media( array(
			'size'              => 'bimber-tile',
			'background_image'  => true,
			'force_placeholder' => true,
		) );
	?>

	<header class="entry-header">
		<?php the_title( sprintf( '<h3 class="g1-gamma g1-gamma-1st g1lg-beta entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' ); ?>

		<div class="entry-after-title">
			<?php
			bimber_render_entry_stats( array() );
			?>
		</div>
	</header>
</article>
