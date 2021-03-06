/* global jQuery */
/* global document */

(function($) {

	'use strict';

	$(document).ready(function(){
		copyCoupon();
	});

	var copyCoupon = function() {
		var
		Coupons = $('.adace-coupon-wrap');
		Coupons.each(function(){
			if ( $(this).hasClass('active') ){
				return;
			} else {
				$(this).addClass('active');
			}
			var
			CopyBtn        = $(this).find('.coupon-copy'),
			CopyAction     = $(this).find('.coupon-action'),
			CopyActionText = CopyAction.text(),
			CopyCode       = $(this).find('.coupon-code'),
			CopyCodeText   = CopyCode.text();
			CopyBtn.click(function(e){
				e.preventDefault();
				// Create element for this pin.
				var
				CopyArea = $('<input style="position:absolute;opacity:0;width:0;height:0;" value="' + CopyCodeText + '" />');
				// Copy code
				CopyCode.prepend(CopyArea);
				CopyArea.select();
    	  		$(document)[0].execCommand("copy");
		        CopyArea.blur().remove();
				if( CopyBtn.hasClass('copied') ){ return; }
				CopyBtn.addClass('copied blink');
				setTimeout(function(){
					CopyAction.html(CopyAction.data('copied'));
					CopyBtn.removeClass('blink');
				}, 375);
				setTimeout(function(){
					CopyBtn.addClass('blink');
				}, 4625);
				setTimeout(function(){
					CopyAction.html(CopyActionText);
					CopyBtn.removeClass('copied blink');
				}, 5000);
			});
		});
	};

})(jQuery);
