<?php get_template_part( 'template-parts/header/preheader', bimber_get_theme_option('header', 'composition' ) ); ?>

<?php if ( bimber_use_sticky_header() ) : ?>
	<div class="g1-sticky-top-wrapper">
<?php endif; ?>

		<?php
		$bimber_class = array(
			'g1-header',
			'g1-header-mobile-' . bimber_get_theme_option( 'header', 'mobile_composition' ),
			'g1-header-06',
			'g1-row',
			'g1-row-layout-page',
		);
		?>

		<div class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $bimber_class ) ); ?>">
			<div class="g1-row-inner">
				<div class="g1-column g1-dropable">


					<div class="g1-wrapper-left">
						<?php if ( has_nav_menu( 'bimber_primary_nav' ) ) : ?>
							<a class="g1-hamburger g1-hamburger-show" href="">
								<span class="g1-hamburger-icon"></span>
								<span class="g1-hamburger-label"><?php esc_html_e( 'Menu', 'bimber' ); ?></span>
							</a>
						<?php endif; ?>

						<nav class="g1-quick-nav">
							<ul class="g1-quick-nav-menu">
								<?php if ( strlen( bimber_get_top_page_url() ) ) : ?>
									<li class="menu-item menu-item-type-g1-top <?php if ( bimber_is_top_page() ) { echo sanitize_html_class( 'current-menu-item' ); } ?>">
										<a href="<?php echo esc_url( bimber_get_top_page_url() ); ?>">
											<span class="entry-flag entry-flag-top"></span>
											<?php echo esc_html( bimber_get_top_page_label() ); ?>
										</a>
									</li>
								<?php endif; ?>
							</ul>
						</nav>
					</div><!-- .g1-wrapper-left -->

					<?php get_template_part( 'template-parts/header/id' ); ?>
					<?php get_template_part( 'template-parts/header/logo-small' ); ?>

					<div class="g1-wrapper-right">
						<?php get_template_part( 'template-parts/header/drop-cart' ); ?>
						<?php get_template_part( 'template-parts/nav-user' ); ?>
						<?php get_template_part( 'template-parts/header/drop-search' ); ?>
						<?php get_template_part( 'template-parts/header/element-socials' ); ?>
					</div><!-- .g1-wrapper-right -->
				</div>

			</div>
			<div class="g1-row-background"></div>
		</div>
<?php if ( bimber_use_sticky_header() ) : ?>
	</div>
<?php endif; ?>

<div class="g1-row g1-row-layout-page g1-navbar">
	<div class="g1-row-inner">
		<div class="g1-column">

			<?php get_template_part( 'template-parts/nav-quick' ); ?>

		</div>
	</div>
</div>
