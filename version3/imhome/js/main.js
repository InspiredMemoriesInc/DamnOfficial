
(function($) {
	"use strict";

	var typo = {
		windowHeight: $(window).height(),
		headerHeight: $(".site-header").height(),
		bannerHeight: $("#home").height(),
		fitscreen : function() {
		   return this.windowHeight - this.headerHeight;
		}
	}
		
	// fullscreen function
	function fullscreen() {
		$(".fullscreen").css("height", typo.windowHeight);
		$(".halfscreen").css("height", typo.windowHeight / 2);
		$(".fitscreen").css("height", typo.fitscreen());
	}

	// on scroll show menu && on scroll sticky
	function onScrollShowMenu() {
		$(window).on("scroll", function() {
			if ( $(".site-main").hasClass("home") ) {
				if ( $(window).scrollTop() >= typo.fitscreen() ) {
					$(".tp-header").addClass("is-sticky default-shadow");
					if( $(window).width() > 979 ) {
						$(".primary-nav, .header-actions").slideDown();
						$(".toggle-header").addClass("active");
					}
				} else {
					$(".tp-header").removeClass("is-sticky default-shadow");
					if( $(window).width() > 979 ) {
						$(".primary-nav, .header-actions").slideUp();
						$(".toggle-header").removeClass("active");
					}
				}
			} else {
				if ( $(window).scrollTop() >= 1 ) {
					$(".tp-header").addClass("is-sticky default-shadow");
					if( $(window).width() > 979 ) {
						$(".primary-nav, .header-actions").slideDown();
						$(".toggle-header").addClass("active");
					}
				} else {
					$(".tp-header").removeClass("is-sticky default-shadow");
					if( $(window).width() > 979 ) {
						$(".primary-nav, .header-actions").slideUp();
						$(".toggle-header").removeClass("active");
					}
				}
			}
		});
	}

	// Toggle Header
	function toggleHeader() {
		$(".toggle-header").on("click", function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			
			if ( $(window).width() >= 768 ) {
				if ( $(".menu-wrapper").hasClass("vertical-nav") ) {
					$(".nav-overlay").toggleClass("active");
					$(".vertical-nav").toggleClass("active");
				} else {
					$(".primary-nav").slideToggle();
				}

				if ($(this).closest(".site-header").hasClass("colored-bg")) {
					$(this).toggleClass("dark");
				}
			} else {
				$(".primary-nav").slideToggle();
			}

			if ( $(window).width() > 768 ) {
				$(".header-actions").slideToggle();
			}

		});

		if ($(".mp-wrapper").hasClass("portfolio-wrapper") && $(".toggle-header").hasClass("dark")) {
			if ($(window).width() < 768 ) {
				$(".toggle-header").removeClass("dark");
			}
		}

		$(".primary-nav > li > a").on("click", function(e) {
			if ( !$(this).next().is("ul") && $(window).width() <= 768 ) {
				$(this).closest(".primary-nav").slideUp();
				$(".toggle-header").removeClass("active");				
			}
			if ( $(this).next().is("ul") && $(window).width() <= 768 ) {
				$(this).next(".sub-menu").slideToggle();
				return false;				
			}
		});
	}

	// Header Cart
	function toggleCartMobile() {
		$("li.mini-cart").on("click", function() {
			if ($(window).width() <768) {
				$(this).toggleClass("active");
			}
		});
	}

	// Toggle Search
	function toggleSearch() {
		$(".search-toggle").on("click", function() {
			$(".search-area").addClass("active");
			$(".search-area input").focus();
		});
		$(".close-search").on("click", function() {
			$(".search-area").removeClass("active");
			$(".search-area input").val("");
		});
		$(document).keyup(function(e) {
		    if (e.keyCode == 27) { // escape key maps to keycode `27`
		        $(".search-area").removeClass("active");
		        $(".search-area input").val("");
		    }
		}); 
	}

	// initiating overlay
	function overlay() {
		$("[data-overlay-color], [data-overlay-opacity]").each(function() {
			var overlayColor = $(this).attr("data-overlay-color");
			var overlayOpacity = $(this).attr("data-overlay-opacity");
			$(this).css({
				backgroundColor: overlayColor,
				opacity: overlayOpacity
			});
			$(this).removeAttr("data-overlay-color data-overlay-opacity");
		});
	}

	// smoth scroll in hash link
	function animatedHashLink(){
		$(".scroll-down").on("click", function() {
		  	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		      		$('html, body').animate({
		        		scrollTop: target.offset().top-65
		      		}, 1000);
		      	return false;
		    	}
		  	}
		});
	}

	// remove placeholder
	function removePlaceholder() {
	    $("input").focusin(function(){
	        $("input").data("holder", $(this).attr("placeholder"));
	        $(this).attr("placeholder", "");
	    });
	    $("input").focusout(function(){
	        $(this).attr("placeholder", $(this).data("holder"));
	    });
	    $("textarea").focusin(function(){
	        $("textarea").data("holder", $(this).attr("placeholder"));
	        $(this).attr("placeholder", "");
	    });
	    $("textarea").focusout(function(){
	        $(this).attr("placeholder", $(this).data("holder"));
	    });
	}

	// initiating carousels
	function owlCarousels() {
		$(".about-carousel").owlCarousel({
			items: 1,
			smartSpeed: 700
		});

		$(".quotes-slider").owlCarousel({
			margin: 30,
			smartSpeed: 700,
			mouseDrag: false,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				}
			}
		});

		$(".single-product-gallery").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			mouseDrag: false,
			smartSpeed: 700
		});

		$(".multi-carusel-1").owlCarousel({
			nav: true,
			loop: true,
			items: 1,
			mouseDrag: false,
			smartSpeed: 700,
			navContainer: '#owl-nav-1',
			dotsContainer: '#owl-dots-1',
			animateOut: 'fadeOut',
			animateIn: 'zoomIn',
			navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
		});
		$("#owl-dots-1 li").on("click", function () {
		    $(".multi-carusel-1").trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		$(".multi-carusel-2").owlCarousel({
			items: 1,
			nav: true,
			loop: true,
			mouseDrag: false,
			smartSpeed: 700,
			navContainer: '#owl-nav-2',
			dotsContainer: '#owl-dots-2',
			navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
		});
		$("#owl-dots-2 li").on("click", function () {
		    $(".multi-carusel-2").trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		$(".multi-carousel-3").owlCarousel({
			nav: true,
			loop: true,
			items: 1,
			mouseDrag: false,
			smartSpeed: 700,
			navContainer: '#owl-nav-3',
			dotsContainer: '#owl-dots-3',
			animateOut: 'fadeOut',
			animateIn: 'zoomIn',
			navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
		});

		$(".multi-carusel-4").owlCarousel({
			nav: true,
			loop: true,
			items: 1,
			mouseDrag: false,
			smartSpeed: 700,
			navContainer: '#owl-nav-4',
			dotsContainer: '#owl-dots-4',
			navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
		});
		$("#owl-dots-4 li").on("click", function () {
		    $(".multi-carusel-4").trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		$(".multi-carusel-5").owlCarousel({
			nav: true,
			loop: true,
			items: 1,
			mouseDrag: false,
			smartSpeed: 700,
			navContainer: '#owl-nav-5',
			dotsContainer: '#owl-dots-5',
			animateOut: 'fadeOut',
			animateIn: 'zoomIn',
			navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
		});
		$("#owl-dots-5 li").on("click", function () {
		    $(".multi-carusel-4").trigger('to.owl.carousel', [$(this).index(), 300]);
		});

		$(".banner-slider-1").owlCarousel({
			nav: true,
			loop: true,
			items: 1,
			mouseDrag: false,
			smartSpeed: 700,
			animateOut: 'fadeOut',
			navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		});
	}

	// initiating jquery parallax
	function parallax() {
		$(".parallax-1").parallax("50%", 0.5);
		$(".parallax-2").parallax("50%", 0.5);
		$(".parallax-3").parallax("50%", 0.5);
	}

	$(".quantity-field .add").on("click", function () {
	    $(this).prev().val(+$(this).prev().val() + 1);
	});
	$(".quantity-field .sub").on("click", function () {
	    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
	});

	$(".selectize").selectize();
	$(".nice-select").niceSelect();

	/*----------------------------------------
		Isotope Masonry
	------------------------------------------*/
	function isotopeMasonry() {
	    $(".isotope-gutter").isotope({
	        itemSelector: '[class^="col-"]',
	        percentPosition: true
	    });

		$(".isotope-no-gutter").isotope({
		    itemSelector: '[class^="col-"]',
		    percentPosition: true,
		    masonry: {
		        columnWidth: 1
		    }
		});

		$(".isotope-filter a").on("click", function(){
		    $(".isotope-filter a").removeClass("active");
		    $(this).addClass("active");
		   // portfolio fiter
		    var selector = $(this).attr("data-filter");
		    $(".isotope-gutter, .isotope-no-gutter").isotope({
		        filter: selector+ ", .filter-wrapper",
		        animationOptions: {
		            duration: 750,
		            easing: "linear",
		            queue: false
		        }
		    });
		    return false;
		});
	}

	function animatedInput() {
		$(".input-group").each(function() {
			$(this).find("input, textarea, .submit").focusin(function() {
				$(this).parent(".input-group").addClass("active");
			});
			$(this).find("input, textarea, .submit").focusout(function() {
				if ($(this).val() == 0 ) {
					$(this).parent(".input-group").removeClass("active");
				}
			});
		});
	}

	function closeContactForm() {
		$(".toggle-contact-form").on("click", function() {
			$(".contact-inner").toggleClass("remove-form").parent(".container").fadeToggle();
			$(this).children(".fa-map").toggle();
			$(this).children(".fa-envelope").toggle();
		});
	}

	function progressBar() {
		$(".progress-item").each(function() {
			var value = $(this).attr("data-value");
			$(this).find(".bar").animate(
				{width: value+"%"},
				{easing: "easeInOutExpo", duration: 2000} // the type of easing
			);

		});
	}

	/*----------------------------------------
		contact form validation
	------------------------------------------*/
	function contactFormValidation() {
		$(".contact-form").validate({
		    rules: {
		        fname: {
		            required: true
		        },
		        lname: {
		            required: true
		        },
		        email: {
		            required: true,
		            email: true
		        },
		        message: {
		            required: true
		        }
		    },
		    messages: {
		        fname: {
		            required: "First name is required"
		        },
		        lname: {
		            required: "Last name is required"
		        },
		        email: {
		            required: "No email, no support"
		        },
		        message: {
		            required: "You have to write something to send this form"
		        }
		    },
		    submitHandler: function(form) {
		        $(form).ajaxSubmit({
		            type: "POST",
		            data: $(form).serialize(),
		            url : "mail.php",
		            success: function() {
		                $(".contact-form").fadeTo( "slow", 1, function() {
		                	$(".contact-form .msg-success").slideDown()
		                    $(".contact-form .input-field").removeClass("active");
		                });
		                $(".contact-form").resetForm();
		            },
		            error: function() {
		                $(".contact-form").fadeTo( "slow", 1, function() {
		                    $(".contact-form .msg-failed").slideDown();
		                });
		            }
		        });
		    },
		    errorPlacement: function(error, element) {
		        element.after(error);
		        error.hide().slideDown();
		    },
		    highlight: function(element) {
		        $(element).parent().addClass("error");
		    },
		    unhighlight: function(element) {
		        $(element).parent().removeClass("error");
		    }
		}); 
	}

	function woocommerceInfoToggle(){
		$(".woocommerce-info").each(function() {
			$(this).find(".woocommerce-info-toggle").on("click", function(event) {
				event.preventDefault();
				$(this).next("form").slideToggle();
			});
		});

		$(".create-account label").on("click", function() {
			$(this).closest(".create-account").next(".password-field").slideToggle();
		});

		$(".diff_shipping_address").on("click", function() {
			$(this).closest(".custom-checkbox").next(".diff-shipping-address").slideToggle();
		});

		$(".wc_payment_method .custom-radio label").each(function() {
			$(this).on("click", function() {
				$(".wc_payment_method .payment_box").slideUp();
				$(this).closest(".custom-radio").next(".payment_box").slideDown();
			});
		});
	}
	/*----------------------------------------
		product radio button
	------------------------------------------*/
	function productRadioButton() {
		$(".product-radio").each(function() {
			var colorCode = $(this).children("label").attr("data-color-code");
			var colorName = $(this).children("label").attr("data-color-name");
			$(this).css("border-color", colorCode);
			$(this).children("label").css("background-color", colorCode);

			$(this).children("input").on("click", function() {
				$(this).closest(".colors").children("p").children(".selected-color").text(colorName)
			});
		});
	}

	// initiating jquery sticky 
	$(".sticky-js").sticky({
		topSpacing: 0
	});

	$(".primary-nav:not(.mp-nav)").singlePageNav({
		offset: $(".site-header").outerHeight() - 15,
		currentClass: "active",
		easing: "easeInOutExpo",
		filter: ':not(.external)',
		speed: 1200
	});

	$(".bs-carousel").carousel();

	// initiating functions
	fullscreen();
	parallax();
	overlay();
	toggleHeader();
	onScrollShowMenu();
	toggleCartMobile();
	toggleSearch();
	animatedHashLink();
	removePlaceholder();
	owlCarousels();
	isotopeMasonry();
	animatedInput();
	closeContactForm();
	contactFormValidation();
	woocommerceInfoToggle();
	productRadioButton();

	$(".progress-item").appear(function(){
		progressBar();
	});

	$(".custom-scrollbar").niceScroll({
		cursorcolor: "#05cd8d",
		cursorborder: 0,
		cursorborderradius: 0
	});

	// recall function when window size changed
	$(window).on('resize', function() {
		fullscreen();
		onScrollShowMenu();
	});


	// recall function when window load completely
	$(window).on('load', function() {
		fullscreen();
		parallax();
		isotopeMasonry();
		//$(".before-after").twentytwenty();
		$(".cocoen").cocoen();
		$(".preloader").fadeOut("slow");
	});

})(jQuery);