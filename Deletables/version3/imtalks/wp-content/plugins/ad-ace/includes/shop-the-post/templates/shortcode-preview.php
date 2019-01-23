<?php
/**
 * Template for the Shop The Post shortcode preview.
 *
 * @package AdAce
 */
?>

<span contentEditable="false" style="float: left;"><?php esc_html_e( 'Shop The Post Collection', 'adace' ); ?></span>
<span contentEditable="false" style="float: right;"><a href="#" class="bstp-remove"><?php esc_html_e( 'X', 'adace' ); ?></a></span>
<br/>
<br/>

<span contentEditable="false" style="display: block; margin-bottom: 10px;">
	Here goes some nice preview.<br />
	Ids: <?php echo $ids; ?>
</span>
