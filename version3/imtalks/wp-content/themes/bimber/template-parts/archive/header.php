<?php
/**
 * The Template for displaying archive pages.
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

$bimber_class = array(
	'g1-row',
	'g1-row-layout-page',
	'page-header',
	'page-header-01',
	'archive-header',
);
$bimber_class = apply_filters( 'bimber_page_header_class', $bimber_class );
?>

<header class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $bimber_class ) ); ?>">
	<div class="g1-row-inner">
		<div class="g1-column">
			<?php
			if ( bimber_show_breadcrumbs() ) :
				bimber_render_breadcrumbs();
			endif;

			the_archive_title( '<h1 class="g1-alpha g1-alpha-2nd page-title archive-title">', '</h1>' );
			the_archive_description( '<h2 class="g1-delta g1-delta-3rd page-subtitle archive-subtitle">', '</h2>' );
			?>
		</div>
	</div>
	<div class="g1-row-background">
	</div>
</header>