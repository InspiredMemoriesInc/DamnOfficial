/* global jQuery */
/* global document */
/* global confirm */
/* global ajaxurl */

/**
 *
 * Navigation
 *
 */
(function($) {

    'use strict';

    $(document).ready(function(){
        if ($('body.appearance_page_theme-options').length > 0) {
            new $.G1ThemeOptionsNav();
        }
    });

    $.G1ThemeOptionsNav = function () {
        this._init();
    };

    $.G1ThemeOptionsNav.prototype = {
        '_init': function () {
            this._bindEvents();
            this._loadPluginPage();
            this._showSubmitButton();
            this._setCurrentTab();
        },
        '_setCurrentTab': function () {
            // GET variable has higher priority.
            if (window.location.href.match('group=.*')) {
                return;
            }

            var tabId = this._readCookie('g1_theme_options_group');

            var $tabToActivate = $('#nav-tab-' + tabId);

            if ($tabToActivate.length > 0) {
                $tabToActivate.trigger('click');
            }
        },
        '_loadPluginPage': function () {
            var $pluginSelectedOnStartup = $('a.nav-tab-active.g1-plugin');

            if ($pluginSelectedOnStartup.length > 0) {
                // emulate user selection
                $pluginSelectedOnStartup.trigger('click');
            }
        },
        '_bindEvents': function () {
            this._onMainMenuClick();
            this._onSubMenuClick();
        },
        '_onMainMenuClick': function () {
            var _this = this;

            $('.nav-tab-wrapper > a').on('click', function (e) {
                e.preventDefault();

                var $navicon = $(this);
                var isCurrent = $navicon.is('.nav-tab-active');
                var isExternalPlugin = $navicon.is('.g1-plugin');
                var isLoaded = $navicon.is('.g1-plugin-loaded');

                // skip
                if (( isCurrent && !isExternalPlugin ) || ( isCurrent && isExternalPlugin && isLoaded )) {
                    return;
                }

                // highlight current group
                $('.nav-tab-active').removeClass('nav-tab-active');
                $(this).addClass('nav-tab-active');

                _this._hideSubmenus();
                _this._showSubmitButton();

                // get group id from link anchor param
                var anchor = $(this).attr('href');
                var group = anchor.match(/&group=(.*)/);
                var groupId = '';

                // theme's internal settings
                if (group) {
                    groupId = group[1];

                    var $sectionsMenu = $('#g1ui-nav-tab-wrapper-' + groupId);

                    if ($sectionsMenu.length > 0) {
                        $sectionsMenu.show();
                        $sectionsMenu.find('> a:first').
                            removeClass('nav-tab-active').
                            trigger('click');
                    } else {
                        _this._deleteCookie('g1_theme_options_section');

                        // remove section selection
                        //$('.nav-tab-active').removeClass('nav-tab-active');

                        _this._showContentForSection(groupId);
                    }
                    // if group not defined, load plugin page via iframe
                } else {
                    var page = anchor.match(/\?page=(.*)/);

                    if (page) {
                        groupId = page[1];

                        // right now plugins have no sections
                        // so we need to clear current selection
                        _this._deleteCookie('g1_theme_options_section');

                        // load
                        if (!isLoaded) {
                            _this._hideAllSections();
                            _this._createSection(groupId, anchor);
                            $navicon.addClass('g1-plugin-loaded');
                        }

                        _this._showContentForSection(groupId);
                    }
                }

                _this._createCookie('g1_theme_options_group', groupId);
            });
        },
        '_onSubMenuClick': function () {
            var _this = this;

            $('.nav-tab-wrapper > a').on('click', function (e) {
                // skip if tab is selected
                if ($(this).is('.nav-tab-active')) {
                    e.preventDefault();
                    return;
                }

                // get section id from link anchor param
                var anchor = $(this).attr('href');
                var section = anchor.match(/&group=(.*)&section=(.*)/);

                if (section) {
                    e.preventDefault();

                    var groupId = section[1];
                    var sectionId = section[2];

                    // highlight current section
                    $('.nav-tab-active').removeClass('nav-tab-active');
                    $(this).addClass('nav-tab-active');

                    _this._createCookie('g1_theme_options_section', sectionId);

                    _this._showContentForSection(groupId, sectionId);
                }
            });
        },
        '_createSection': function (groupId, anchor) {
            var $section = $('<div id="g1ui-settings-section-' + groupId + '" class="g1ui-settings-section">');
            var $info = $('<p class="g1ui-settings-section-msg">Loading...</p>');

            $('.g1ui-settings-section:last').after($section);

            $section.append($info);

            var $iframe = $('<iframe class="g1-plugin-page" src="' + anchor + '">');

            $iframe.hide();
            $section.append($iframe);

            $iframe.load(function () {
                var $iframeContent = $iframe.contents();

                $info.remove();
                $iframe.show();

                // hide elements inside iframe, besides plugin form
                //$iframeContent.find('#adminmenu, #adminmenuback, #wpadminbar, #wpfooter, .nav-tab-wrapper').remove();

                $iframeContent.find('#wpcontent').css({
                    'margin-left': 0,
                    'padding-left': 0
                });

                $iframeContent.find('.wp-toolbar').css({
                    'padding-top': 0
                });

                $iframeContent.find('.wrap').css({
                    'margin-top': 0
                });

                $iframeContent.find('input[type=submit]').hide();

                $iframeContent.find('#wpbody-content').css('padding-bottom', '20px');

                // adjust iframe height
                var $pluginContent = $iframeContent.find('#wpwrap');

                $iframe.css('height', $pluginContent.css('height'));
            });
        },
        '_showSubmitButton': function () {
            var $selectedNavItem = $('.nav-tab-wrapper > a.nav-tab-active');
            var $themeOptionsForm = $('#theme-options-form');

            if ($themeOptionsForm.length === 0) {
                return;
            }

            var $submitButton = $themeOptionsForm.find('.button-primary').not('.g1-install-demo-data');

            if ($selectedNavItem.is('.g1-form')) {
                $submitButton.show();
            } else {
                $submitButton.hide();
            }
        },
        '_hideAllSections': function () {
            $('.g1ui-settings-section').hide();
        },
        '_hideSubmenus': function () {
            //$('.nav-tab-wrapper').hide();
        },
        '_showContentForSection': function (groupId, sectionId) {
            this._hideAllSections();

            var selector = '#g1ui-settings-section-' + groupId;

            if (sectionId) {
                selector += '-' + sectionId;
            }

            $(selector).show();
        },
        '_createCookie': function (name, value, days) {
            var expires;

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = '; expires=' + date.toUTCString();
            }
            else {
                expires = '';
            }

            document.cookie = name.concat('=', value, expires, '; path=/');
        },
        '_readCookie': function (name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');

            for(var i = 0; i < ca.length; i += 1) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1,c.length);
                }

                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length,c.length);
                }
            }

            return null;

        },
        '_deleteCookie': function (name) {
            this._createCookie(name, '', -1);
        }
    };
})(jQuery);


/**
 *
 * Import Theme Options
 *
 */
(function($) {

    'use strict';

    $(document).ready(function(){
        if ($('body.appearance_page_theme-options').length > 0) {
            $('#g1-import-theme-options').on('click', function (e) {
                if ( !confirm('Import will override your current theme options. Proceed? ') ) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });

            $('select#bimber-choose-demo').on('change', function() {
                var demo = $(this).val();

                $('.bimber-import-demo-data-link').each(function () {
                    var href = $(this).attr('href');

                    href = href.replace(/demo=[a-z]+/i, 'demo=' + demo);

                    $(this).attr('href', href);
                });
            });
        }
    });

})(jQuery);


/**
 *
 * Dashboard
 *
 */
(function($) {

    'use strict';

    var $demoWrapper;

    $(document).ready(function(){
        if ($('body.appearance_page_theme-options').length === 0) {
            return;
        }

        // Demo under processing.
        var pluginsToInstall;
        var pluginsInstalled;

        $('#g1ui-settings-section-demos').each(function () {
            var $sectionWrapper = $(this);
            var $installAction = $sectionWrapper.find('.g1-install-demo-data');
            var $allDataCheckbox = $sectionWrapper.find('.g1-install-with-content');

            $allDataCheckbox.on('change', function() {
                var isChecked = $(this).is(':checked');
                var $wrapper = $(this).parents('label');

                if (isChecked) {
                    $wrapper.find('.g1-install-all').removeClass('g1-hidden');
                    $wrapper.find('.g1-install-only-options').addClass('g1-hidden');
                } else {
                    $wrapper.find('.g1-install-all').addClass('g1-hidden');
                    $wrapper.find('.g1-install-only-options').removeClass('g1-hidden');
                }
            });

            $installAction.on('click', function (e) {
                e.preventDefault();

                var $this   = $(this);
                var plugins = [];
                var demos   = [];

                $demoWrapper = $this.parents('.g1ui-plugicon');

                var installWC = false;

                if ( $demoWrapper.is('.g1ui-plugicon-affiliate') ) {
                    installWC = true;
                }

                $sectionWrapper.find('.g1ui-plugicons .g1ui-plugicon').each(function () {
                    var $container = $(this);

                    if ($container.is('.g1ui-plugicon-checked') || (installWC && $container.is('.g1ui-plugicon-woocommerce'))) {
                        $container.removeClass('g1ui-plugicon-checked');
                        $container.removeClass('g1ui-plugicon-unchecked');
                        $container.addClass('g1ui-plugicon-pending');
                        plugins.push($container);
                    } else {
                        $container.removeClass('g1ui-plugicon-unchecked');
                        $container.addClass('g1ui-plugicon-omitted');
                    }
                });

                pluginsInstalled = 0;
                pluginsToInstall = plugins.length;

                // Reset all demos.
                $sectionWrapper.find('.g1ui-demicons .g1ui-plugicon').each(function () {
                    var $container = $(this);

                    $container.removeClass('g1ui-plugicon-unchecked');
                    $container.addClass('g1ui-plugicon-omitted');
                });

                $demoWrapper.removeClass('g1ui-plugicon-omitted');
                $demoWrapper.removeClass('g1ui-plugicon-checked');
                $demoWrapper.addClass('g1ui-plugicon-pending');
                demos.push($demoWrapper);

                $demoWrapper.find('.g1ui-plugins-installed').addClass('g1ui-loading');

                setImportState('started');

                installPlugins(plugins, function () {
                    // If some plugins were installed this code is not necessary. It's for a case when there is no plugin to install (all were already installed for other demo).
                    $demoWrapper.find('.g1ui-progress-bar').css('width', '100%');
                    $demoWrapper.find('.g1ui-plugins-installed').removeClass('g1ui-loading');

                    // plugins installed so we can move to next step
                    // and install demo content + theme options
                    installContentAndOptions(demos);
                });
            });

            $('body').on('g1PluginInstallationEnded', function() {
                pluginsInstalled++;

                var percentage = Math.round( pluginsInstalled / pluginsToInstall * 100 );

                $demoWrapper.find('.g1ui-progress-bar').css('width', percentage + '%');

                if (pluginsInstalled === pluginsToInstall) {
                    $demoWrapper.find('.g1ui-plugins-installed').removeClass('g1ui-loading');
                }

            });
        });
    });

    function setImportState(state) {
        $.ajax({
            'type': 'POST',
            'url': ajaxurl,
            'dataType': 'json',
            'data': {
                'action':       'bimber_demo_import_' + state
            }
        });
    }

    function installPlugins (plugins, finishCallback) {
        if (plugins.length === 0) {
            finishCallback();
            return;
        }

        // get first plugin from list
        var $container = plugins.shift();
        var $plugin = $container.find('input.g1-plugin-to-install');
        var url = $plugin.attr('data-g1-install-url');

        $container.removeClass('g1ui-plugicon-pending');
        $container.addClass('g1ui-plugicon-loading');

        // install plugin
        $.get( url, function( data ) {
            var $errorMessage = $(data).find('#message.error');

            var status = $errorMessage.length === 0 ? 'success': 'failure';

            $container.removeClass('g1ui-plugicon-loading');

            if (status === 'success') {
                $container.addClass('g1ui-plugicon-succeed');
            } else {
                $container.addClass('g1ui-plugicon-failed');
            }

            $('body').trigger('g1PluginInstallationEnded', [ 'success' === status ]);

            // process the rest of plugins
            // it's done this way to use async ajax calls and in the same time install plugins one after another, not asynchronously
            // TGM has problem with installing more than one plugin via "Install" link. Batch action is for this.
            installPlugins(plugins, finishCallback);
        });
    }

    function installContentAndOptions (demos) {
        // without demo content?
        if (demos.length === 0) {
            return;
        }

        var $container = demos.shift();

        $container.removeClass('g1ui-plugicon-pending');
        $container.addClass('g1ui-plugicon-loading');

        var installUrl = $container.find('a.g1-install-demo-data').attr('href');

        if ($container.find('input.g1-install-with-content').is(':checked')) {
            installUrl = installUrl.replace('type=theme_options', 'type=all');
        }

        setTimeout(function() {
            setImportState('ended');

            window.location.href = installUrl;
        }, 1000);
    }

})(jQuery);


/**
 *
 * Registration
 *
 */
(function($) {

    'use strict';

    $(document).ready(function() {
        $('.g1-install-envato-market').on('click', function(e) {
            e.preventDefault();

            var $link               = $(this);
            var $wrapper            = $link.parents('li');
            var pluginActionUrl     = $link.attr('href');
            var $notActivatedState  = $wrapper.find('.envato-market-not-activated');
            var $installingState    = $wrapper.find('.envato-market-installing');
            var $activatedState     = $wrapper.find('.envato-market-activated');
            var $failedState        = $wrapper.find('.envato-market-installation-failed');

            $notActivatedState.hide();
            $installingState.show();

            var xhr = $.ajax({
                'type': 'GET',
                'url': pluginActionUrl
            });

            xhr.done(function() {
                $installingState.hide();
                $activatedState.show();
            });

            xhr.fail(function() {
                $installingState.hide();
                $failedState.show();
            });
        });
    });

})(jQuery);

/**
 *
 * Import
 *
 */
(function($) {

        'use strict';

        $(document).ready(function() {
            $('.bimber-import-mycred-button-reset').on('click', function(e) {
                e.preventDefault();

                var $link               = $(this);
                var nonce = $('#bimber_mycred_import_nonce_reset').val();

                var xhr = $.ajax({
                    'type': 'POST',
                    'url': ajaxurl,
                    'dataType': 'json',
                    'data': {
                        'action':       'bimber_mycred_import_reset',
                        'security': nonce,
                    }
                });

                xhr.done(function() {
                    $link.replaceWith('<span>Done!</span>');
                });

                xhr.fail(function() {
                    $link.replaceWith('<span>Something went wrong</span>');
                });
            });

            $('.bimber-import-mycred-button-import').on('click', function(e) {
                e.preventDefault();

                var $link               = $(this);
                var $result             = $('.bimber-import-mycred-result');
                var data = {};
                $('input[name^="import_mycred_settings"]').each(function() {
                    data[$(this).val()] = $(this).is(':checked');
                });
                var nonce = $('#bimber_mycred_import_nonce').val();

                $result.html('<br><span>Working...</span>');

                var xhr = $.ajax({
                    'type': 'POST',
                    'url': ajaxurl,
                    'dataType': 'json',
                    'data': {
                        'action':       'bimber_mycred_import',
                        'security': nonce,
                        'options': data
                    }
                });

                xhr.done(function() {
                    $result.html('<br><span>Done!</span>');
                });

                xhr.fail(function() {
                    $link.replaceWith('<span>Something went wrong</span>');
                });
            });
        });

    })(jQuery);