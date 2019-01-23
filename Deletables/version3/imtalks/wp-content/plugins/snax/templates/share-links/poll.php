<?php
/**
 * Twitter share link
 *
 * @package snax 1.11
 * @subpackage Share
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}?>

<div class="snax-poll-answers-share"><?php
echo esc_html__( 'Share your vote on', 'snax' );
$links = apply_filters( 'snax_poll_share_links', array( 'facebook', 'twitter' ) );
foreach ( $links as $link_id ) {
	snax_get_template_part( 'share-links/poll-' . $link_id );
}
?>
</div>
