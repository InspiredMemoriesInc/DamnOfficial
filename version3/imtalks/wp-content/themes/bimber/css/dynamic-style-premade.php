<?php
/**
 * Premade color schemes
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme
 */
$bimber_stack = bimber_get_theme_option( 'global', 'stack' );
?>
.g1-dark { color: rgba(255, 255, 255, 0.8); }

.g1-dark h1,
.g1-dark h2,
.g1-dark h3,
.g1-dark h4,
.g1-dark h5,
.g1-dark h6 {
	color: #fff;
}

<?php if ( 'bunchy' === $bimber_stack ) : ?>
.g1-dark .g1-meta { color: rgba(255, 255, 255,1); }
.g1-dark .g1-meta a { color: rgba(255, 255, 255, 1); }
.g1-dark .entry-meta { color: rgba(255, 255, 255, 1); }
.g1-dark .entry-meta a { color: rgba(255, 255, 255,1); }
.g1-dark .entry-categories { color: rgba(255, 255, 255,1); }
.g1-dark .entry-categories a { color: rgba(255, 255, 255,1); }
<?php elseif ( 'hardcore' === $bimber_stack ) : ?>
.g1-dark .g1-meta { color: rgba(255, 255, 255, 0.6); }
.g1-dark .g1-meta a { color: rgba(255, 255, 255, 0.8); }
<?php else : ?>
.g1-dark .g1-meta { color: rgba(255, 255, 255, 0.6); }
.g1-dark .g1-meta a { color: rgba(255, 255, 255, 0.8); }
.g1-dark .entry-meta { color: rgba(255, 255, 255, 0.6); }
.g1-dark .entry-meta a { color: rgba(255, 255, 255, 0.8); }
<?php endif;?>
.g1-dark .g1-meta a:hover { color: rgba(255, 255, 255, 1); }

.g1-dark .entry-meta a:hover { color: rgba(255, 255, 255, 1); }


.g1-dark .archive-title:before {
	color: inherit;
}


