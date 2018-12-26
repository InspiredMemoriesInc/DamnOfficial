(function($) { "use strict";
	
	
	//Home text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.hero-wrap');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	

	
		//Navigation
	
		var isLateralNavAnimating = false;
		
		//open/close lateral navigation
		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			//stop if nav animation is running 
			if( !isLateralNavAnimating ) {
				if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
				
				$('body').toggleClass('navigation-is-open');
				$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//animation is over
					isLateralNavAnimating = false;
				});
			}
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
		
		$('.parallax-business24').parallax("50%", 0.4);	
		$('.parallax-business25').parallax("50%", 0.4);	
		$('.parallax-business26').parallax("50%", 0.4);	
		$('.parallax-business27').parallax("50%", 0.4);	
		$('.parallax-business28').parallax("50%", 0.4);	



	
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


	});	

 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	