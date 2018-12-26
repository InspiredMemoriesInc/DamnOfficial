<?php
/**
 * Default options for WP Customizer
 *
 * @license For the full license information, please view the Licensing folder
 * that was distributed with this source code.
 *
 * @package Bimber_Theme
 */

$bimber_customizer_defaults = array(
	// Site Identity.
	'branding_show_tagline'                  => true,
	'branding_logo'                          => '',
	'branding_logo_width'                    => '',
	'branding_logo_height'                   => '',
	'branding_logo_hdpi'                     => '',
	'branding_logo_small'                    => '',
	'branding_logo_small_width'              => '',
	'branding_logo_small_height'             => '',
	'branding_logo_small_hdpi'               => '',
	'footer_text'                            => '',
	'footer_stamp'                           => '',
	'footer_stamp_width'                     => '',
	'footer_stamp_height'                    => '',
	'footer_stamp_hdpi'                      => '',
	'footer_stamp_label'                     => '',
	'footer_stamp_url'                       => '',

	// Static Front Page.
	'home_template'                          => 'one-featured-classic-sidebar',
	'home_featured_entries'                  => 'none',
	'home_featured_entries_template'         => 'row-2of3-3v-3v',
	'home_featured_entries_gutter'           => 'none',
	'home_featured_entries_title'            => '',
	'home_featured_entries_title_hide'       => false,
	'home_featured_entries_category'         => '',
	'home_featured_entries_tag'              => array( '' ),
	'home_featured_entries_time_range'       => 'all',
	'home_featured_entries_hide_elements'    => '',
	'home_title'                             => '',
	'home_title_hide'                        => false,
	'home_pagination'                        => 'infinite-scroll-on-demand',
	'home_hide_elements'                     => '',
	'home_main_collection_excluded_categories'         => '',
	'home_newsletter'                        => 'standard',
	'home_newsletter_after_post'             => 2,
	'home_newsletter_repeat'                 => 12,
	'home_product'                           => 'none',
	'home_product_after_post'                => 4,
	'home_product_repeat'                    => 12,
	'home_product_category'                  => '',
	'home_ad'                                => 'standard',
	'home_ad_after_post'                     => 6,
	'home_ad_repeat'                         => 12,

	// Posts > Global.
	'posts_top_in_menu' 					 => 'separate',
	'posts_popular_enable'                   => true,
	'posts_hot_enable'                   	 => true,
	'posts_trending_enable'                  => true,
	'posts_top_page'                         => '',
	'posts_latest_page'                      => true,
	'posts_hot_page'                         => '',
	'posts_popular_page'                     => '',
	'posts_trending_page'                    => '',
	'posts_views_threshold'                  => 10,
	'posts_fake_view_count_base'			 => '',
	'posts_fb_app_id'			 	 => '',
	'posts_comments_threshold'               => 1,
	'posts_timeago'                          => 'standard',
	'posts_auto_play_videos'                  => false,
	'posts_page_waypoints'                  => true,
	'posts_set_target_blank'                  => true,
	'posts_auto_play_videos'                  => false,

	// Posts > Single.
	'post_template'                          => 'classic',
	'post_hide_elements'                     => '',
	'post_sharebar'                          => 'standard',
	'post_flyin_nav'                         => true,
	'post_native_comments_label'             => '',
	'post_pagination_overview'               => 'page_links',
	'post_pagination_adjacent_label'         => 'adjacent',
	'post_pagination_adjacent_style'         => 'link',
	'post_pagination_next_post'              => 'standard',
	'post_dont_miss_hide_elements'           => 'categories,summary,views,comments_link',
	'post_related_hide_elements'             => 'summary,author,date,views,comments_link',
	'post_more_from_hide_elements'           => 'categories,summary,views,comments_link',
	'post_pagination_single_order'			 => 10,
	'post_bottom_share_buttons_order'        => 15,
	'post_tags_order'                        => 20,
	'post_newsletter_order'                  => 25,
	'post_nav_single_order'                  => 30,
	'post_voting_box_order'					 => 35,
	'post_reactions_order'					 => 40,
	'post_author_info_order'                 => 45,
	'post_related_entries_order'			 => 50,
	'post_more_from_order'					 => 55,
	'post_comments_order'					 => 60,
	'post_dont_miss_order'					 => 65,

	// Posts > Archive.
	'archive_template'                       => 'grid-sidebar',
	'archive_featured_entries'               => 'recent',
	'archive_featured_entries_template'      => 'row-2of3-3v-3v',
	'archive_featured_entries_gutter'        => 'none',
	'archive_featured_entries_title'         => '',
	'archive_featured_entries_title_hide'    => 'none',
	'archive_featured_entries_time_range'    => 'all',
	'archive_featured_entries_hide_elements' => '',
	'archive_header_composition'             => '01',
	'archive_title'                          => '',
	'archive_title_hide'                     => 'none',
	'archive_posts_per_page'                 => 12,
	'archive_pagination'                     => 'infinite-scroll-on-demand',
	'archive_hide_elements'                  => '',
	'archive_newsletter'                     => 'standard',
	'archive_newsletter_after_post'          => 2,
	'archive_newsletter_repeat'              => 12,
	'archive_product'                     	 => 'none',
	'archive_product_after_post'          	 => 4,
	'archive_product_repeat'          	     => 12,
	'archive_product_category'     	         => '',
	'archive_ad'                             => 'standard',
	'archive_ad_after_post'                  => 6,
	'archive_ad_repeat'                      => 12,

	// Posts > Auto Load.
	'posts_auto_load_enable'                 => false,
	'posts_auto_load_max_posts'              => '0',

	// Featured Entries.
	'featured_entries_visibility'            => 'home,single_post',
	'featured_entries_template'              => 'grid',
	'featured_entries_gutter'                => false,
	'featured_entries_above_header'          => false,
	'featured_entries_img_ratio'             => '2-1',
	'featured_entries_type'                  => 'recent',
	'featured_entries_category'              => '',
	'featured_entries_tag'                   => array( '' ),
	'featured_entries_time_range'            => 'all',
	'featured_entries_exclude_from_main_loop' => true,

	// Design > Global.
	'global_stack'                           => 'original',
	'global_skin'                            => 'light',
	'global_layout'                          => 'stretched',
	'global_google_font_subset'              => 'latin,latin-ext',
	'global_background_color'                => '#e6e6e6',
	'content_cs_1_background_color'          => '#ffffff',
	'content_cs_1_accent1'                   => '#ff0036',
	'content_cs_2_background_color'          => '#ff0036',
	'content_cs_2_background2_color'         => '#ff6636',
	'content_cs_2_text1'                     => '#ffffff',
	'hot_background_color'                   => '#ff0036',
	'trending_background_color'              => '#bf0029',
	'popular_background_color'               => '#ff577b',
	'breadcrumbs'                            => 'standard',
	'archive_header_bg1_color'               => '',
	'archive_header_bg2_color'               => '',

	// Design > Header.
	'header_composition'                     => 'original',
	'header_mobile_composition'              => '01',
	'header_sticky'                          => 'none',
	'header_logo_margin_bottom'              => '15',
	'header_logo_margin_top'                 => '15',
	'header_quicknav_margin_top'             => '15',
	'header_quicknav_margin_bottom'          => '15',
	'header_quicknav_labels'                 => 'standard',
	'header_text_color'                      => '#000000',
	'header_accent_color'                    => '#ff0036',
	'header_background_color'                => '#ffffff',
	'header_border_color'                    => '',
	'header_navbar_background_color'         => '#ff0036',
	'header_navbar_text_color'               => '#ffffff',
	'header_navbar_accent_color'             => '#000000',
	'header_navbar_secondary_background_color'         => '#000000',
	'header_navbar_secondary_text_color'               => '#ffffff',
	'header_submenu_background_color'        => '#ffffff',
	'header_submenu_text_color'              => '#666666',
	'header_submenu_accent_color'            => '#ff0036',
	'header_bg2_color'						 => '',
	'archive_header_background_color'        => '',
	'archive_header_background2_color'       => '',
	'archive_header_background_image'        => '',

	'preheader_text_color'                   => '#666666',
	'preheader_accent_color'                 => '#ff0036',
	'preheader_background_color'             => '#ffffff',
	'preheader_bg2_color'				     => '',
	'preheader_border_color'                 => '',

	// Design > Footer.
	'footer_cs_1_background_color'           => '#f2f2f2',
	'footer_cs_1_text1'                      => '#000000',
	'footer_cs_1_text2'                      => '#666666',
	'footer_cs_1_text3'                      => '#999999',
	'footer_cs_1_accent1'                    => '#ff0036',
	'footer_cs_2_background_color'           => '#ff0036',
	'footer_cs_2_text1'                      => '#ffffff',

	// Search.
	'search_ajax'                            => true,
	'search_template'                       => 'classic-sidebar',
	'search_posts_per_page'                 => 12,
	'search_pagination'                     => 'load-more',
	'search_hide_elements'                  => '',

	// NSFW.
	'nsfw_enabled'                       	 => true,
	'nsfw_categories_ids'                    => 'nsfw',

	// Newsletter.
	'newsletter_title'                       => 'Want more stuff like this?',
	'newsletter_subtitle'                    => 'Get the best viral stories straight into your inbox!',
	'newsletter_compact_title'               => 'Get the best viral stories straight into your inbox!',
	'newsletter_privacy'               		 => 'Don\'t worry, we don\'t spam',

	// Snax.
	'snax_header_type'                       => 'normal',
	'snax_header_create_button_visibility'   => 'all',
	'snax_header_create_button_type'         => 'all',
	'snax_header_create_button_label'        => 'Create',

	// What's Your Reaction.
	'wyr_show_reactions_in_header'			 => 'standard',
	'wyr_show_entry_reactions'	             => 'standard',
	'wyr_fake_reaction_count_base'           => '',
	'wyr_fake_reactions_randomize'           => 'none',

	// WooCommerce.
	'woocommerce_cart_visibility'	 		 => 'always',
	'woocommerce_affiliate_link_target'      => '_blank',

	// G1 Socials.
	'header_social_icons'                    => 'header_drop',

	// Visual Composer.
	'home_vc_page_id'						 => '',

	// BuddyPress.
	'bp_enable_sidebar'			=> 'standard',
);
