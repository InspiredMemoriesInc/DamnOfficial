<?php
/**
 * Pagination - Show numbered pagination for catalog pages
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/pagination.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.2.2
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $wp_query;

if ( $wp_query->max_num_pages <= 1 ) {
	return;
}
?>
<nav class="g1-pagination woocommerce-pagination">
	<p class="g1-pagination-label g1-pagination-label-links"><?php esc_html_e( 'Pages', 'bimber' ); ?></p>

	<?php
		echo str_replace(
			array(
				'<ul class=\'page-numbers\'>',
				'<li><a class="prev page-numbers"',
				'<li><a class=\'page-numbers\'',
				'<li><span class=\'page-numbers current\'>',
				'</span></li>',
				'<li><a class="next page-numbers"',
			),
			array(
				'<ul>',
				'<li class="g1-pagination-item-prev"><a class="g1-delta g1-delta-1st prev"',
				'<li class="g1-pagination-item"><a ',
				'<li class="g1-pagination-item-current"><strong>',
				'</strong></li>',
				'<li class="g1-pagination-item-next"><a class="g1-delta g1-delta-1st next"',
			),
			paginate_links( apply_filters( 'woocommerce_pagination_args', array(
				'base'         => esc_url_raw( str_replace( 999999999, '%#%', remove_query_arg( 'add-to-cart', get_pagenum_link( 999999999, false ) ) ) ),
				'format'       => '',
				'add_args'     => false,
				'current'      => max( 1, get_query_var( 'paged' ) ),
				'total'        => $wp_query->max_num_pages,
				'prev_text'    => __( 'Previous', 'bimber' ),
				'next_text'    => __( 'Next', 'bimber' ),
				'type'         => 'list',
				'end_size'     => 3,
				'mid_size'     => 3
			) ) )
		);
	?>
</nav>
