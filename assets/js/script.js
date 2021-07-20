(function ($) {

    'use strict';

	/*------------------------------------
    countdown
	--------------------------------------*/
	if (jQuery("[data-countdown]").length > 0) {
		$('[data-countdown]').each(function () {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				$this.html(event.strftime('<span class="cdown days"><p>Days</p> <span class="time-count">%-D</span></span> <span class="cdown hour"><p>Hours</p> <span class="time-count">%-H</span></span> <span class="cdown minutes"><p>Minutes</p> <span class="time-count">%M</span></span> '));
			});
		});
	};

	// ================ Accordion =================
	$(".single-accordion").click(function(){
		$(this).toggleClass("active").children('.accordion-body').slideToggle().parents('.single-accordion').siblings().removeClass('active').children('.accordion-body').slideUp();
	});


	// PreLoader 
	// var PreLoader = document.getElementById('preloader');

	// function myFuncatio() {
	// 	PreLoader.style.display = 'none'
	// };
	
	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});

})(jQuery);

$(window).on("load", function(){
	$(".preloader").fadeOut();
	console.log('hii there')
});

