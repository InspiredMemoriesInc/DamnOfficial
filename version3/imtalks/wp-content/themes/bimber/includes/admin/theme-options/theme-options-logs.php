<?php
/**
 * Theme options "Logs" section
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


$section_id = 'g1ui-settings-section-logs';

add_settings_section(
	$section_id,                        // ID used to identify this section and with which to register options.
	null,                               // Title to be displayed on the administration page.
	'bimber_render_logs_description',
	$this->get_page()                   // Page on which to add this section of options.
);

// Section fields.
add_settings_field(
	'advanced_logs',
	'Errors',
	'bimber_render_logs',
	$this->get_page(),
	$section_id
);

/**
 * Render logs section
 */
function bimber_render_logs() {
	$errors = get_transient( 'bimber_errors' );

	if ( empty( $errors ) ) {
		esc_html_e( 'Great. No errors reported', 'bimber' );

		return;
	}

	?>
	<ul>
		<?php foreach ( $errors as $error ) : ?>
			<li>
				<h4><?php echo wp_kses_post( $error['brief'] ); ?></h4>
				<p>
					<?php echo wp_kses_post( $error['message'] ); ?>
				</p>
			</li>
		<?php endforeach; ?>
	</ul>
	<?php
}

/**
 * Render logs section description
 */
function bimber_render_logs_description() {
	?>
	<p><?php esc_html_e( 'If something suspicious happens, in this section you will find all information that helps you find and solve that problem. It can be also helpful for our support staff.', 'bimber' ); ?></p>
	<?php
}
