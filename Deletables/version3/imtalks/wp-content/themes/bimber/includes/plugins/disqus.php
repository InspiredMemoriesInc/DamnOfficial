<?php
/**
 * Disqus plugin functions
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

function bimber_dsq_disable_comments() {
	remove_filter( 'comments_template', 'dsq_comments_template' );
}

function bimber_dsq_enable_comments() {
	$on_demand = apply_filters( 'bimber_dsq_comments_on_demand', true );

	$classes = array(
		'g1-comment-type',
		'g1-comment-type-dsq',
	);

	if ( $on_demand ) {
		$classes[] = 'g1-on-demand';
	}
	?>

	<div class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $classes ) ); ?>" data-bimber-post-id="<?php echo absint( get_the_ID() ); ?>">
		<p class="g1-notice g1-notice-loading"><?php esc_html_e( 'Loading&hellip;', 'bimber' ); ?></p>

		<div class="g1-comment-count" data-bimber-dsq-comment-count="<?php echo absint( bimber_dsq_get_comment_count() ); ?>" data-bimber-post-id="<?php echo absint( get_the_ID() ); ?>" data-bimber-nonce="<?php echo wp_create_nonce( 'bimber-update-dsq-comment-count' ); ?>">
			<span class="disqus-comment-count" data-disqus-url="<?php echo esc_url( get_permalink() ); ?>"></span>
		</div>

		<div class="g1-comment-list">
			<?php if ( ! $on_demand ) : ?>

				<?php bimber_dsq_render_comments(); ?>

			<?php endif; ?>
		</div>
	</div>
	<?php
}

/**
 * Render Disqus comments
 *
 * @param bool $async				Is disqus loaded asynchronously?.
 */
function bimber_dsq_render_comments($async = false) {
	if ( $async ) {
		add_filter( 'pre_option_dsq_external_js', '__return_empty_string' );
	}

	remove_filter( 'comments_template_query_args',	'bimber_dsq_exclude_comments' );
	add_filter( 'comments_template', 'dsq_comments_template' );

	comments_template();
}

function bimber_dsq_ajax_load_comments() {
	$post_id = (int) filter_input( INPUT_GET, 'post_id', FILTER_SANITIZE_NUMBER_INT );

	if ( 0 === $post_id ) {
		echo -1;
		exit;
	}

	global $wp_query;

	// Make is_single() works.
	$wp_query->is_single = true;
	$wp_query->is_singular = true;

	$query = new WP_Query( array(
		'p'                 => $post_id,
		'post_type'         => 'any',
		'posts_per_page'    => 1,
	) );

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) { $query->the_post();
			bimber_dsq_render_comments( true );
		}

		wp_reset_postdata();
	}
	exit;
}

/**
 * Register Disqus comment type
 *
 * @param array $types			List of types.
 *
 * @return array
 */
function bimber_dsq_register_comment_type($types ) {
	$count = bimber_dsq_get_comment_count();

	if ( $count > 0 ) {
		$types['dsq'] = sprintf( _x( 'Disqus <span class="count">%d</span>', 'Type of comments', 'bimber' ), $count );
	} else {
		$types['dsq'] = _x( 'Disqus', 'Type of comments', 'bimber' );
	}


	return $types;
}

/**
 * Return Disqus comment count for the post
 *
 * @param WP_Post $post			Optional. Post object or id.
 *
 * @return int
 */
function bimber_dsq_get_comment_count( $post = null ) {
	$count = 0;

	$post = get_post( $post );

	if ( $post ) {
		$count = (int) get_post_meta( $post->ID, '_bimber_dsq_comment_count', true );
	}

	return $count;
}

/**
 * Update Disqus comment count for the post
 *
 * @param int     $count		Value to change.
 * @param WP_Post $post			Optional. Post object or id.
 *
 * @return int
 */
function bimber_dsq_update_comment_count( $count, $post = null ) {
	$post = get_post( $post );

	update_post_meta( $post->ID, '_bimber_dsq_comment_count', $count );
}

/**
 * Ajax action to update current Disqus comment count
 */
function bimber_dsq_ajax_update_comment_count() {
	check_ajax_referer( 'bimber-update-dsq-comment-count', 'security' );

	$post_id = (int) filter_input( INPUT_POST, 'post_id', FILTER_SANITIZE_NUMBER_INT );

	if ( 0 === $post_id ) {
		echo -1;
		exit;
	}

	$count = (int) filter_input( INPUT_POST, 'count', FILTER_SANITIZE_NUMBER_INT );

	bimber_dsq_update_comment_count( $count, $post_id );

	echo 1;
	exit;
}

/**
 * Filters a post's comment count before it is updated in the database.
 *
 * @param int $new     The new comment count. Default null.
 * @param int $old     The old comment count.
 * @param int $post_id Post ID.
 *
 * @return int                      Number of comments.
 */
function bimber_dsq_count_only_wp_comments( $new, $old, $post_id ) {
	global $wpdb;

	$new = (int) $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $wpdb->comments WHERE comment_post_ID = %d AND comment_approved = '1' AND comment_agent NOT LIKE %s", $post_id, 'Disqus%' ) );

	return $new;
}

/**
 * Increase number of comments by adding Disqus comments
 *
 * @param int $number		Current comments number.
 * @return int
 */
function bimber_add_dsq_comments_number( $number ) {
	$number += bimber_dsq_get_comment_count();

	return $number;
}

/**
 * Subtract Disqus comments from total number of comments
 *
 * @param int $wp_comments				Number of comments.
 *
 * @return int
 */
function bimber_dsq_subtract_comments_number( $wp_comments ) {
	$dsq_comments = bimber_dsq_get_comment_count();

	return $wp_comments - $dsq_comments;
}
