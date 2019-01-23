<?php
/**
 * Ads widget
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package adace_Theme
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'widgets_init', 'adace_register_ads_widget' );
/**
 * Ads widget register function
 */
function adace_register_ads_widget() {
	register_widget( 'Adace_Ads_Widget' );
}

/**
 * Ads widget class
 */
class Adace_Ads_Widget extends WP_widget {
	/**
	 * Widget contruct.
	 */
	function __construct() {
		parent::__construct(
			'adace_ads_widget',
			esc_html__( 'AdAce Ads', 'adace' ),
			array(
				'description' => esc_html__( 'Displays Google AdSense or any other ad.', 'adace' ),
			)
		);
	}

	/**
	 * Widget form.
	 *
	 * @param array $instance Current widget settings.
	 */
	public function form( $instance ) {
		$instance_default = array(
			'ad_id' => -1,
		);
		$instance               = wp_parse_args( $instance, $instance_default );

		$ads_choices = array(
			'' => esc_html__( '- None -', 'adace' ),
			'-1' => esc_html__( '- Random ad -', 'adace' ),
		);
		$ads = adace_get_all_ads();
		if ( ! empty( $ads ) ) {
			foreach ( $ads as $ad ) {
				$ads_choices[ $ad->ID ] = $ad->post_title;
			}
		}
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'ad_id' ) ); ?>"><?php esc_html_e( 'Ads:', 'adace' ); ?></label>
			<select class="widefat" id="<?php echo esc_attr( $this -> get_field_id( 'ad_id' ) ); ?>" name="<?php echo  esc_attr( $this -> get_field_name( 'ad_id' ) ); ?>" >
				<?php
				foreach ( $ads_choices as $value => $label ) {
					echo '<option value="' . esc_attr( $value ) . '"' . selected( $value === (int) $instance['ad_id'], true, false ) . '>' . esc_html( $label ) . '</option>';
				}
				?>
			</select>
		</p>
		<?php
	}

	/**
	 * Widget saving.
	 *
	 * @param array $new_instance Current widget settings form output.
	 * @param array $old_instance Old widget settings.
	 */
	public function update( $new_instance, $old_instance ) {
		// Sanitize input.
		$instance = array();
		$instance['ad_id'] = filter_var( $new_instance['ad_id'], FILTER_SANITIZE_NUMBER_INT );
		return $instance;
	}

	/**
	 * Widget output.
	 *
	 * @param array $args Widget args from registration point.
	 * @param array $instance Widget settings.
	 */
	public function widget( $args, $instance ) {

		if ( ! apply_filters( 'adace_display_widget',  true, $instance ) ) {
			return;
		}

		// Get settings.
		$ad_id = $instance['ad_id'];

		$slot_id = 'adace-widget-' . $ad_id;
		if ( adace_disable_ads_per_post( $slot_id ) ) {
			return;
		}
		$html = adace_capture_ad_standard_template( $ad_id, $slot_id );

		// Echo all widget elements.
		ob_start();
		echo wp_kses_post( $args['before_widget'] );
		echo( $html );
		echo wp_kses_post( $args['after_widget'] );
		$html = ob_get_clean();
		echo apply_filters( 'adace_widget_output', $html, $instance );
	}
}
