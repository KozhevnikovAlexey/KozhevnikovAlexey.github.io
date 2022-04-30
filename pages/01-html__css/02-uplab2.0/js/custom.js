$(function(){

	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}

	$(window).bind('load resize', hf);

	$('.baner-slider').slick({
		 arrows:true,
    dots: false,
    appendArrows:'.banner-slider-bottons', 
    // var num = 1;
    prevArrow: '<button type="button" class="slick-prev"><i class = " icon-left  " ></i></button> ' ,
    nextArrow: '<button type="button" class="slick-next"><i class = " icon-right " ></i></button>',
     autoplay: true,
    autoplaySpeed: 3000,
})
  $(".baner-slider").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  })
 


  $('.shop-slider').slick({
    arrows:true,
    dots: false,
    appendArrows:'.shop-slider-bottons', 
    prevArrow: '<button type="button" class="slick-prev"><i class = " icon-left  " ></i></button>' ,
    nextArrow: '<button type="button" class="slick-next"><i class = " icon-right " ></i></button>',
    autoplay: true,
    autoplaySpeed: 2000,
  }) 


});

   


