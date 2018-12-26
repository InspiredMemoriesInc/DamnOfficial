<?php
/**
 * The Template Part for displaying Comments.
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

if ( post_password_required() ) {
	return;
}
?>

<?php if ( get_comments_number() || comments_open() ) : ?>
	<section id="comments" class="g1-comment-type g1-comment-type-wp comments-area" itemscope itemtype="http://schema.org/UserComments">
		<?php
		$comments_by_type = separate_comments( $comments );

		$bimber_comments_count = count( $comments_by_type['comment'] );

		// Pingbacks & Trackbacks ?
		$bimber_pings_count = count( $comments_by_type['pings'] );
		?>
		<?php if ( $bimber_comments_count ) : ?>

			<?php if ( 1 === count( bimber_get_comment_types() ) ) : ?>
				<h2 class="comments-title g1-beta g1-beta-2nd">
					<?php echo esc_html( sprintf( _n( 'One Comment', '%1$s Comments', $bimber_comments_count, 'bimber' ), number_format_i18n( $bimber_comments_count ) ) ); ?>
				</h2>
			<?php endif ?>

			<?php if ( comments_open() ) : ?>
				<a class="g1-button g1-button-s g1-button-solid g1-comment-form-anchor" href="#respond"><?php esc_html_e( 'Leave a Reply', 'bimber' ); ?></a>
			<?php endif; ?>

			<ol class="comment-list">
				<?php
				wp_list_comments( array(
					'type'     => 'comment',
					'callback' => 'bimber_wp_list_comments_callback',
				) );
				?>
			</ol>
			<?php if ( get_comment_pages_count() > 1 ) : ?>
				<nav class="g1-comment-pagination">
					<p>
						<strong><?php esc_html_e( 'Pages', 'bimber' ); ?></strong>
						<?php paginate_comments_links(); ?>
					</p>
				</nav>
			<?php endif; ?>

		<?php endif; ?>

		<?php if ( $bimber_pings_count ) : ?>

			<h2 class="comments-title g1-beta g1-beta-2nd">
				<?php echo esc_html( sprintf( _n( 'One Ping', '%1$s Pings & Trackbacks', $bimber_pings_count, 'bimber' ), number_format_i18n( $bimber_pings_count ) ) ); ?>
			</h2>

			<ol class="comment-list">
				<?php
				wp_list_comments( array(
					'type'     => 'pings',
					'page'     => 1,
					'per_page' => $bimber_pings_count,
					'callback' => 'bimber_wp_list_comments_callback',
				) );
				?>
			</ol>
		<?php endif; ?>

		<?php
		if ( comments_open() ) :
			comment_form( array(
				'title_reply_before' => '<h3 id="reply-title" class="comment-reply-title g1-beta g1-beta-2nd">',
			) );
		endif;
		?>
	</section><!-- #comments -->
<?php endif;
