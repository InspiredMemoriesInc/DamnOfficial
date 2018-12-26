(function($) { "use strict";
	
	
	//Home text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.hero-wrap-1');
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
		
		$('.parallax-8').parallax("50%", 0.4);	

		

		

	
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


	
	//Product Carousel
	 
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	 
	  sync1.owlCarousel({
		singleItem : true,
		transitionStyle : "backSlide",
		slideSpeed : 1500,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	  });

	  
	  sync2.owlCarousel({
		items : 3,
		itemsDesktop      : [1199,3],
		itemsDesktopSmall     : [979,3],
		itemsTablet       : [768,3],
		itemsMobile       : [479,3],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });
	 
	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }
	 
	  $("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}
	 
		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}
		
	  }

		/* Logos Carousel */		
		
		$("#owl-logos").owlCarousel({
			items : 6,
			itemsDesktop : [1000,4], 
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2], 
			itemsMobile : false, 
			pagination : false,
			autoPlay : 3000,
			slideSpeed : 300
		});	
	
	
		//Fancybox
		
		$(".fancybox").fancybox({
			maxWidth	: 600,
			maxHeight	: 900,
			fitToView	: false,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic'
		});	
		
		
		//Full Accordion
				
		$(".accordion").smk_Accordion({
			closeAble: true 
		});
 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	