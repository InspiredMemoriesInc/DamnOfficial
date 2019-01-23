<?php
/**
 * Header styles
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme
 */

$bimber_filter_hex = array( 'options' => array( 'regexp' => '/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/' ) );

$bimber_logo_margin_top    = (int) bimber_get_theme_option( 'header', 'logo_margin_top' );
$bimber_logo_margin_bottom = (int) bimber_get_theme_option( 'header', 'logo_margin_bottom' );

$bimber_quicknav_margin_top    = (int) bimber_get_theme_option( 'header', 'quicknav_margin_top' );
$bimber_quicknav_margin_bottom = (int) bimber_get_theme_option( 'header', 'quicknav_margin_bottom' );
?>

<?php if ( 0 === $bimber_logo_margin_top ) : ?>
	.g1-header .g1-id {
		margin-top: 0;
	}
<?php endif; ?>

<?php if ( 0 === $bimber_logo_margin_bottom ) : ?>
	.g1-header .g1-id {
	margin-bottom: 0;
	}
<?php endif; ?>

@media only screen and ( min-width: 801px ) {
	.g1-header .g1-id {
		margin-top: <?php echo intval( $bimber_logo_margin_top ); ?>px;
		margin-bottom: <?php echo intval( $bimber_logo_margin_bottom ); ?>px;
	}

	.g1-header .g1-quick-nav {
		margin-top: <?php echo intval( $bimber_quicknav_margin_top ); ?>px;
		margin-bottom: <?php echo intval( $bimber_quicknav_margin_bottom ); ?>px;
	}
}


<?php
$bimber_header_text       = new Bimber_Color( bimber_get_theme_option( 'header', 'text_color' ) );
$bimber_header_accent     = new Bimber_Color( bimber_get_theme_option( 'header', 'accent_color' ) );
$bimber_header_bg1        = new Bimber_Color( bimber_get_theme_option( 'header', 'background_color' ) );

$bimber_header_bg2 = bimber_get_theme_option( 'header', 'bg2_color' );
$bimber_header_bg2 = strlen( $bimber_header_bg2 ) ? new Bimber_Color( $bimber_header_bg2 ) : $bimber_header_bg1;

$bimber_header_border = bimber_get_theme_option( 'header', 'border_color' );
$bimber_header_border = strlen( $bimber_header_border ) ? new Bimber_Color( $bimber_header_border ) : '';

$bimber_navbar_background = new Bimber_Color( bimber_get_theme_option( 'header', 'navbar_background_color' ) );
$bimber_navbar_text       = new Bimber_Color( bimber_get_theme_option( 'header', 'navbar_text_color' ) );
$bimber_navbar_accent     = new Bimber_Color( bimber_get_theme_option( 'header', 'navbar_accent_color' ) );

$bimber_submenu_background = new Bimber_Color( bimber_get_theme_option( 'header', 'submenu_background_color' ) );
$bimber_submenu_text       = new Bimber_Color( bimber_get_theme_option( 'header', 'submenu_text_color' ) );
$bimber_submenu_accent     = new Bimber_Color( bimber_get_theme_option( 'header', 'submenu_accent_color' ) );

$bimber_navbar_secondary_background = new Bimber_Color( bimber_get_theme_option( 'header', 'navbar_secondary_background_color' ) );
$bimber_navbar_secondary_text       = new Bimber_Color( bimber_get_theme_option( 'header', 'navbar_secondary_text_color' ) );
?>

.g1-header .menu-item > a,
.g1-header .g1-hamburger,
.g1-header .g1-drop-toggle,
.g1-header .g1-socials-item-link {
color: #<?php echo filter_var( $bimber_header_text->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-header .menu-item:hover > a,
.g1-header .current-menu-item > a,
.g1-navbar .current-menu-ancestor > a,
.g1-header .menu-item-object-post_tag > a:before,
.g1-header .g1-socials-item-link:hover {
color: #<?php echo filter_var( $bimber_header_accent->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-header > .g1-row-background {
	<?php if ( $bimber_header_border ) : ?>
		border-color: #<?php echo filter_var( $bimber_header_border->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
	<?php endif; ?>


	background-color: #<?php echo filter_var( $bimber_header_bg1->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;

	<?php if ( $bimber_header_bg1->get_hex() !== $bimber_header_bg2->get_hex() ) : ?>
	background-image: -webkit-linear-gradient(to right, #<?php echo filter_var( $bimber_header_bg1->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>, #<?php echo filter_var( $bimber_header_bg2->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>);
	background-image:    -moz-linear-gradient(to right, #<?php echo filter_var( $bimber_header_bg1->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>, #<?php echo filter_var( $bimber_header_bg2->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>);
	background-image:      -o-linear-gradient(to right, #<?php echo filter_var( $bimber_header_bg1->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>, #<?php echo filter_var( $bimber_header_bg2->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>);
	background-image:         linear-gradient(to right, #<?php echo filter_var( $bimber_header_bg1->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>, #<?php echo filter_var( $bimber_header_bg2->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>);
	<?php endif; ?>
}


.g1-navbar {
border-color: #<?php echo filter_var( $bimber_navbar_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
background-color: #<?php echo filter_var( $bimber_navbar_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}


.g1-navbar .menu-item > a,
.g1-navbar .g1-hamburger,
.g1-navbar .g1-drop-toggle,
.g1-navbar .g1-socials-item-link {
color: #<?php echo filter_var( $bimber_navbar_text->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-navbar .menu-item:hover > a,
.g1-navbar .current-menu-item > a,
.g1-navbar .current-menu-ancestor > a,
.g1-navbar .menu-item-object-post_tag > a:before,
.g1-navbar .g1-socials-item-link:hover {
color: #<?php echo filter_var( $bimber_navbar_accent->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-navbar .sub-menu,
.g1-header .sub-menu {
border-color: #<?php echo filter_var( $bimber_submenu_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
background-color: #<?php echo filter_var( $bimber_submenu_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-navbar .sub-menu .menu-item > a,
.g1-header .sub-menu .menu-item > a {
color: #<?php echo filter_var( $bimber_submenu_text->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-header .g1-link-toggle,
.g1-navbar .g1-link-toggle {
color: #<?php echo filter_var( $bimber_submenu_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-navbar .sub-menu .menu-item:hover > a,
.g1-header .sub-menu .menu-item:hover > a,
.g1-navbar .sub-menu .current-menu-item > a,
.g1-header .sub-menu .current-menu-item > a,
.g1-navbar .sub-menu .current-menu-ancestor > a,
.g1-header .sub-menu .current-menu-ancestor > a {
color: #<?php echo filter_var( $bimber_submenu_accent->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}

.g1-header .g1-drop-toggle-badge,
.g1-header .snax-button-create,
.g1-header .snax-button-create:hover,
.g1-navbar .g1-drop-toggle-badge,
.g1-navbar .snax-button-create,
.g1-navbar .snax-button-create:hover {
	border-color: #<?php echo filter_var( $bimber_navbar_secondary_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
	background-color: #<?php echo filter_var( $bimber_navbar_secondary_background->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
	color: #<?php echo filter_var( $bimber_navbar_secondary_text->get_hex(), FILTER_VALIDATE_REGEXP, $bimber_filter_hex ); ?>;
}