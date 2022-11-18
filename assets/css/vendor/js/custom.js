/* Initialize Swiper */
let options = {};
if ( $(".sw_produts--swiper .swiper-slide").length == 1 ) {
	options = {
	slidesPerView: 3,
	spaceBetween: 0,
	breakpoints: {
	480: {
	slidesPerView: 1,
	spaceBetween: 0,
	},
	}
	}
   } else {
	options = {
	slidesPerView: 3,
	spaceBetween: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// init: false,
	breakpoints: {
		991: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 1.5,
			centeredSlides: false,
		},
		425: {
			slidesPerView: 1.3,
			centeredSlides: false,
		},
		320: {
			slidesPerView: 1.3,
			centeredSlides: false,
		}, 
	}
	}
}

var swiper1 = new Swiper('.sw_produts--swiper', options);
var sw_length = swiper1.length;
if(sw_length <= 3){
$('.sw_produts--swiper .swiper-pagination').addClass('pagenav');
}

//min & max validation st
//input type number 
function numberOnly(id) {
	var element = document.getElementById(id);
	element.value = element.value.replace(/[^0-9]/gi, "");
}

//input type text
function limit(element, max) {
	var max_chars = max;
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    } 
}
// java validation st

//Tooltip
try{

var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
}
 catch(e){}
 
//select number page select number header fixed top on page scrolling st
(function($) {
	$.fn.fixMe = function() {
	   return this.each(function() {
		  var $this = $(this),
			 $t_fixed;
		  function init() {
			 $this.wrap('<div class="container" />');
			 $t_fixed = $this.clone();
			 $t_fixed.find("tbody").remove().end().addClass("fixed").insertBefore($this);
			 resizeFixed();
		  }
		  function resizeFixed() {
			 $t_fixed.find("th").each(function(index) {
				$(this).css("width",$this.find("th").eq(index).outerWidth()+"px");
			 });
		  }
		  function scrollFixed() {
			 var offset = $(this).scrollTop(),
			 tableOffsetTop = $this.offset().top,
			 tableOffsetBottom = tableOffsetTop + $this.height() - $this.find("thead").height();
			 if(offset < tableOffsetTop || offset > tableOffsetBottom)
				$t_fixed.hide();
			 else if(offset >= tableOffsetTop && offset <= tableOffsetBottom && $t_fixed.is(":hidden"))
				$t_fixed.show();
		  }
		  $(window).resize(resizeFixed);
		  $(window).scroll(scrollFixed);
		  init();
	   });
	};
 })(jQuery);
 
 $(document).ready(function(){
	$("table").fixMe();
	$(".up").click(function() {
	   $('html, body').animate({
	   scrollTop: 0
	}, 2000);
  });
  $(".menu-mobile-trigger").click(function(){
	myFunction();
   });
 });
   function myFunction() {
	 $(".header").css ("zIndex", "200");
   };
//select number page select number header fixed top on page scrolling st

//review and confirm on off button st
$("#Trigger").click(function () {
	if ($("#Slider").hasClass("slideup"))
		$("#Slider").removeClass("slideup").addClass("slidedown");
	else
		$("#Slider").removeClass("slidedown").addClass("slideup");
});
//review and confirm on off button end

//Review & Confirm
$("#Trigger").click(function () {
	if ($(".Slider1").hasClass("slideup"))
		$(".Slider1").removeClass("slideup").addClass("slidedown");
	else
		$(".Slider1").removeClass("slidedown").addClass("slideup");
    });