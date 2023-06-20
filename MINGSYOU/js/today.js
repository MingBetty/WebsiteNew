// JavaScript Document

$(document).ready(function(){	
	
	$(".menu").click(function()
    { 
		$("nav").slideToggle();
	});


	$(window).on('load resize',function()
    {
			var a_w = document.body.clientWidth;
			if(a_w >= 900) $("nav").show(); 
			else $("nav").hide();
	}
	);
	
	var swiper = new Swiper(".mySwiper", {
		speed: 1000,
		spaceBetween: 15,
		centeredSlides: true,
		autoplay: 
    {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: 
    {
	  el: ".swiper-pagination",
	  clickable: true,
	},
  	});
});