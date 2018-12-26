(function($) { "use strict";
	
	
	//Home text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.hero-wrap-pages');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	

	
	
	$(document).ready(function() {"use strict";

	
		//Preloader
		
		  $(".animsition").animsition({
		  
			inClass               :   'fade-in',
			outClass              :   'fade-out',
			inDuration            :    500,
			outDuration           :    500,
			linkElement           :   '.animsition-link', 
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body', //animsition wrapper element
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			//"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. 
			//The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			
			overlay               :   false,
			
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		  });	
		  
	
		//Parallax
		
		$('.parallax-blog-pages').parallax("50%", 0.4);
		$('.parallax-5').parallax("50%", 0.4);	



		 

	/* Blog Sorting */


		(function ($) { 
		
		
			var container = $('.blog-pages-wrapper');
			
			
			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			
			$('#portfolio-filter #filter a').click(function () { 
				var selector = $(this).attr('data-filter');
				
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				container.isotope( { 
					filter : selector 
				});
				
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				
				return false;
			});
			
			function reArrangeProjects() { 
				setColumnWidth();
				container.isotope('reLayout');
			}
			
			
			container.imagesLoaded(function () { 
				setColumnWidth();
				
				
				container.isotope( { 
					itemSelector : '.blog-pages-wrap-box', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
			
			
		
			
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);
	} );

	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);


		/* Blog Carousel */		
		
		$("#owl-blog-slider-1").owlCarousel({
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});	
	

		
	

	
	//Scroll back to top

		var offset = 450;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	