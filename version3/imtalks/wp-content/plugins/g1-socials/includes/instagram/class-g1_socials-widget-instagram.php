<?php
/**
 * Patreon Widget
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package g1_socials_Theme
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'No direct script access allowed' );
}

add_action( 'widgets_init', 'g1_socials_register_instagram_widget' );
/**
 * About me widget register function.
 */
function g1_socials_register_instagram_widget() {
	register_widget( 'G1_Socials_Instagram_Widget' );
}

/**
 * Patreon widget class.
 */
class G1_Socials_Instagram_Widget extends WP_widget {
	/**
	 * Widget contruct.
	 */
	function __construct() {
		parent::__construct(
			'g1_socials_instagram_widget',
			esc_html__( 'G1 Socials Instagram', 'g1_socials' ),
			array(
				'description' => esc_html__( 'Promote your Instagram.', 'g1_socials' ),
			)
		);
	}

	/**
	 * Get default arguments
	 *
	 * @return array
	 */
	public function get_default_args() {
		return apply_filters( 'g1_socials_widget_instagram_defaults', array(
			'title'               => esc_html__( 'Instagram', 'g1_socials' ),
			'username'            => '',
			'limit'               => 9,
			'size'                => 'large',
			'target'              => '_blank',
			'link'                => '',
			'afterwidget_details' => true,
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
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Title:', 'g1_socials' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_html( $instance['title'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'username' ) ); ?>"><?php esc_html_e( '@username or #tag', 'g1_socials' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'username' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'username' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['username'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'limit' ) ); ?>"><?php esc_html_e( 'Number of photos', 'g1_socials' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'limit' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'limit' ) ); ?>" type="number" value="<?php echo esc_attr( $instance['limit'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'size' ) ); ?>"><?php esc_html_e( 'Photo size', 'g1_socials' ); ?>:</label>
			<select id="<?php echo esc_attr( $this->get_field_id( 'size' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'size' ) ); ?>" class="widefat">
				<option value="thumbnail" <?php selected( 'thumbnail', $instance['size'] ); ?>><?php esc_html_e( 'Thumbnail', 'g1_socials' ); ?></option>
				<option value="small" <?php selected( 'small', $instance['size'] ); ?>><?php esc_html_e( 'Small', 'g1_socials' ); ?></option>
				<option value="large" <?php selected( 'large', $instance['size'] ); ?>><?php esc_html_e( 'Large', 'g1_socials' ); ?></option>
				<option value="original" <?php selected( 'original', $instance['size'] ); ?>><?php esc_html_e( 'Original', 'g1_socials' ); ?></option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>"><?php esc_html_e( 'Open links in', 'g1_socials' ); ?>:</label>
			<select id="<?php echo esc_attr( $this->get_field_id( 'target' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'target' ) ); ?>" class="widefat">
				<option value="_self" <?php selected( '_self', $instance['target'] ); ?>><?php esc_html_e( 'Current window (_self)', 'g1_socials' ); ?></option>
				<option value="_blank" <?php selected( '_blank', $instance['target'] ); ?>><?php esc_html_e( 'New window (_blank)', 'g1_socials' ); ?></option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'link' ) ); ?>"><?php esc_html_e( 'Link text', 'g1_socials' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'link' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'link' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['link'] ); ?>" />
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
		$instance             = array();
		$default_args         = $this->get_default_args();
		$instance['title']    = filter_var( $new_instance['title'], FILTER_SANITIZE_STRING );
		$instance['username'] = trim( strip_tags( $new_instance['username'] ) );
		$instance['limit']    = empty( $new_instance['limit'] ) ? $default_args['limit'] : intval( $new_instance['limit'] );
		$instance['size']     = empty( $new_instance['size'] ) ? $default_args['size'] : $new_instance['size'];
		$instance['target']   = empty( $new_instance['target'] ) ? $default_args['target'] : $new_instance['target'];
		$instance['link']     = empty( $new_instance['link'] ) ? $default_args['link'] : $new_instance['link'];
		return $instance;
	}

	/**
	 * Widget output.
	 *
	 * @param array $args Widget args from registration point.
	 * @param array $instance Widget settings.
	 */
	public function widget( $args, $instance ) {
		$instance            = wp_parse_args( $instance, $this->get_default_args() );
		$title               = apply_filters( 'widget_title', $instance['title'] );
		$username            = $instance['username'];
		$limit               = $instance['limit'];
		$size                = $instance['size'];
		$target              = $instance['target'];
		$link                = $instance['link'];
		$afterwidget_details = $instance['afterwidget_details'];

		// Echo all widget elements.
		echo wp_kses_post( $args['before_widget'] );
		if ( ! empty( $title ) ) {
			echo wp_kses_post( $args['before_title'] . $title . $args['after_title'] );
		}

		if ( ! empty( $username ) ) {

			$instagram_feed = g1_socials_get_instagram_feed( $username );

			if ( is_wp_error( $instagram_feed ) ) {
				echo wp_kses_post( $instagram_feed->get_error_message() );
			} else {
				// slice list down to required limit.
				$instagram_feed = array_slice( $instagram_feed, 0, $limit );
				?>
				<ul class="<?php echo esc_attr( 'instagram-pics instagram-size-' . $size ); ?>">
					<?php
					foreach ( $instagram_feed as $item ) {
						?>
						<li class="">
							<a href="<?php echo( esc_url( $item['link'] ) ); ?>" target="<?php echo( esc_url( $target ) ); ?>"  class="">
								<img src="<?php echo( esc_url( $item[ $size ] ) ); ?>"  alt="<?php echo( esc_url( $item['description'] ) ); ?>" title="<?php echo( esc_url( $item['description'] ) ); ?>"  class=""/>
							</a>
						</li>
						<?php
					}
					?>
				</ul>
				<?php
			}
		}

		if ( $afterwidget_details ) {

			switch ( substr( $username, 0, 1 ) ) {
				case '#':
					$url = esc_url( '//instagram.com/explore/tags/' . str_replace( '#', '', $username ) );
					break;
				default:
					$url = esc_url( '//instagram.com/' . str_replace( '@', '', $username ) );
					break;
			}
			?>
			<p class="after-instagram-username-widget">
				<a class="g1-delta g1-delta-1st instagram-username" href="<?php echo trailingslashit( esc_url( $url ) ); ?>" rel="me" target="<?php echo esc_attr( $target ); ?>" class="">
					<?php echo wp_kses_post( $username ); ?>
				</a>
			</p>
			<?php

			if ( '' !== $link ) {
				?>
				<p class="after-instagram-link-widget">
					<a class="g1-button g1-button-s g1-button-simple" href="<?php echo trailingslashit( esc_url( $url ) ); ?>" rel="me" target="<?php echo esc_attr( $target ); ?>" class="">
						<?php echo wp_kses_post( $link ); ?>
					</a>
				</p>
				<?php
			}
		}
		echo wp_kses_post( $args['after_widget'] );
	}
}
