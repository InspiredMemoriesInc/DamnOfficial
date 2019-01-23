<?php
/**
 * Patreon Widget
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

add_action( 'widgets_init', 'adace_register_patreon_widget' );
/**
 * About me widget register function.
 */
function adace_register_patreon_widget() {
	register_widget( 'Adace_Patreon_Widget' );
}

/**
 * Patreon widget class.
 */
class Adace_Patreon_Widget extends WP_widget {
	/**
	 * Widget contruct.
	 */
	function __construct() {
		parent::__construct(
			'adace_patreon_widget',
			esc_html__( 'Adace Patreon', 'adace' ),
			array(
				'description' => esc_html__( 'Promote your Patreon page.', 'adace' ),
			)
		);
	}

	/**
	 * Get default arguments
	 *
	 * @return array
	 */
	public function get_default_args() {
		return apply_filters( 'adace_widget_patreon_defaults', array(
			'title' => esc_html__( 'Patreon', 'adace' ),
		) );
	}

	/**
	 * Widget contruct.
	 *
	 * @param array $instance Current widget settings.
	 */
	public function form( $instance ) {
		$instance = wp_parse_args( $instance, $this->get_default_args() );
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'adace' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_html( $instance['title'] ); ?>" />
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
		$instance              = array();
		$instance['title']     = filter_var( $new_instance['title'], FILTER_SANITIZE_STRING );
		return $instance;
	}

	/**
	 * Widget output.
	 *
	 * @param array $args Widget args from registration point.
	 * @param array $instance Widget settings.
	 */
	public function widget( $args, $instance ) {
		// Get settings.
		$instance = wp_parse_args( $instance, $this->get_default_args() );
		$title = apply_filters( 'widget_title', $instance['title'] );
		// Echo all widget elements.
		echo wp_kses_post( $args['before_widget'] );
		if ( ! empty( $title ) ) {
			echo wp_kses_post( $args['before_title'] . $title . $args['after_title'] );
		}
		$patreon_label = get_option( 'adace_patreon_label', adace_options_get_defaults( 'adace_patreon_label' ) );
		$patreon_title = get_option( 'adace_patreon_title', adace_options_get_defaults( 'adace_patreon_title' ) );
		$patreon_link  = get_option( 'adace_patreon_link', adace_options_get_defaults( 'adace_patreon_link' ) );
		?>
		<div class="g1-light g1-section g1-section-patreon g1-section-background">
			<span class="g1-section-icon"></span>
			<div class="g1-section-body">
				<h2 class="g1-zeta g1-zeta-2nd g1-section-label"><?php echo( wp_kses_post( html_entity_decode( $patreon_label ) ) ); ?></h2>
				<h3 class="g1-section-title"><a href="<?php echo( esc_url( $patreon_link ) ); ?>" rel="nofollow" target="_blank"><?php echo( wp_kses_post( html_entity_decode( $patreon_title ) ) ); ?></a></h3>
			</div>
			<div class="g1-section-btn-wrap">
				<a class="g1-button g1-button-solid g1-section-btn" href="<?php echo( esc_url( $patreon_link ) ); ?>" rel="nofollow" target="_blank"><?php esc_html_e( 'Become a Patron', 'blogstar' ); ?></a>
			</div>
		</div>
		<?php
		echo wp_kses_post( $args['after_widget'] );
	}
}
