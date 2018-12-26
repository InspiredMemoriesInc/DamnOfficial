<?php
/**
 * Snax Post Voting Box Template Part
 *
 * @package snax
 * @subpackage Theme
 */

?>
<?php if ( snax_show_item_voting_box() ) : ?>
<div class="snax-voting-container">
	<h2 class="g1-gamma g1-gamma-2nd snax-voting-container-title"><?php esc_html_e( 'What do you think?', 'bimber' ); ?></h2>
	<?php snax_render_voting_box( null, 0, 'snax-voting-large' ); ?>
</div>
<?php endif; ?>
