<?php
/**
 * Meta boxes
 *
 * @package AdAce
 * @subpackage Places
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'add_meta_boxes_adace_place', 'adace_add_places_meta_boxes' );
/**
 * Register ad metaboxes.
 */
function adace_add_places_meta_boxes() {
	add_meta_box(
		'adace_places_meta_box',
		esc_html( 'Place Options', 'adace' ),
		'adace_places_meta_box_render_callback'
	);
}

/**
 * Meta box renderer.
 *
 * @param object $post Post.
 */
function adace_places_meta_box_render_callback( $post ) {
	$current_place_link  = get_post_meta( $post -> ID, 'adace_place_link', true );
	if ( ! $current_place_link ) {
		$current_place_link = '';
	}
	$current_place_nofollow  = get_post_meta( $post -> ID, 'adace_place_nofollow', true );
	?>
		<fieldset>
			<table class="form-table">
				<tbody>
					<tr>
						<th scope="row"><?php esc_html_e( 'Place Link', 'adace' ); ?></th>
						<td>
							<input type="text" style="width:100%;" name="adace_place_link" id="adace_place_link" value="<?php echo( esc_url( $current_place_link ) ); ?>">
						</td>
					</tr>
					<tr>
						<th scope="row"><?php esc_html_e( 'Nofollow Link', 'adace' ); ?></th>
						<td>
							<input type="checkbox"name="adace_place_nofollow" id="adace_place_nofollow" <?php checked( $current_place_nofollow, true ) ?>>
						</td>
					</tr>
				</tbody>
			</table>
			<?php wp_nonce_field( adace_get_plugin_basename(),'adace_save_place_meta_nonce' ); ?>
		</fieldset>
	<?php
}

add_action( 'save_post', 'adace_places_meta_box_data_save' );
/**
 * Meta box saver.
 *
 * @param string $post_id Post id.
 */
function adace_places_meta_box_data_save( $post_id ) {
	// Sanitize args.
	$args = filter_input_array( INPUT_POST,
		array(
			'adace_save_place_meta_nonce' => FILTER_SANITIZE_STRING,
			'post_type'                   => FILTER_SANITIZE_STRING,
			'adace_place_link'            => FILTER_SANITIZE_URL,
			'adace_place_nofollow'        => FILTER_VALIDATE_BOOLEAN,
		)
	);
	// Verify that nonce.
	if ( ! wp_verify_nonce( $args['adace_save_place_meta_nonce'], adace_get_plugin_basename() ) ) {
		return;
	}
	// Check if post_type is correct.
	if ( 'adace_place' !== $args['post_type'] ) {
		return;
	}
	// If user can edit this type.
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	// Save new meta value.
	$args['adace_place_link'] = apply_filters(
		'adace_place_link_save_filter',
		$args['adace_place_link']
	);
	update_post_meta( $post_id, 'adace_place_link', $args['adace_place_link'] );
	// Save new meta value.
	$args['adace_place_nofollow'] = apply_filters(
		'adace_place_nofollow_save_filter',
		$args['adace_place_nofollow']
	);
	update_post_meta( $post_id, 'adace_place_nofollow', $args['adace_place_nofollow'] );
}
