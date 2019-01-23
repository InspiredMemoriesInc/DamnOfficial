<?php get_template_part( 'template-parts/header/preheader', bimber_get_theme_option('header', 'composition' ) ); ?>

		<?php
		$bimber_class = array(
			'g1-header',
			'g1-header-mobile-' . bimber_get_theme_option( 'header', 'mobile_composition' ),
			'g1-row',
			'g1-row-layout-page',
		);
		?>

		<div class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $bimber_class ) ); ?>">
			<div class="g1-row-inner">
				<div class="g1-column">
					<?php get_template_part( 'template-parts/header/id' ); ?>
					<?php get_template_part( 'template-parts/nav-quick' ); ?>
				</div>
			</div>
			<div class="g1-row-background"></div>
		</div>

<?php if ( bimber_use_sticky_header() ) : ?>
	<div class="g1-sticky-top-wrapper">
<?php endif; ?>

		<div class="g1-row g1-row-layout-page g1-navbar">
			<div class="g1-row-inner">
				<div class="g1-column g1-dropable">
					<?php if ( has_nav_menu( 'bimber_primary_nav' ) ) : ?>
						<a class="g1-hamburger g1-hamburger-show" href="">
							<span class="g1-hamburger-icon"></span>
							<span class="g1-hamburger-label"><?php esc_html_e( 'Menu', 'bimber' ); ?></span>
						</a>
					<?php endif; ?>

					<?php get_template_part( 'template-parts/header/logo-small' ); ?>

					<!-- BEGIN .g1-primary-nav -->
					<?php
					if ( has_nav_menu( 'bimber_primary_nav' ) ) :
						wp_nav_menu( array(
							'theme_location'  => 'bimber_primary_nav',
							'container'       => 'nav',
							'container_class' => 'g1-primary-nav',
							'container_id'    => 'g1-primary-nav',
							'menu_class'      => 'g1-primary-nav-menu',
							'menu_id'         => 'g1-primary-nav-menu',
							'depth'           => 0,
							'walker' 		  => new Bimber_Walker_Nav_Menu(),
						) );
					endif;
					?>

					<?php get_template_part( 'template-parts/header/drop-cart' ); ?>

					<?php get_template_part( 'template-parts/nav-user' ); ?>
					<?php get_template_part( 'template-parts/header/drop-search' ); ?>
					<?php get_template_part( 'template-parts/header/element-socials' ); ?>
				</div><!-- .g1-column -->

			</div>
		</div>
<?php if ( bimber_use_sticky_header() ) : ?>
	</div>
<?php endif;
