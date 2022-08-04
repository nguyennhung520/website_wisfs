var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });
  
  
var galleryTop = new Swiper('.swiper-container.testimonial', {
	speed: 400,
	spaceBetween: 50,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	direction: 'vertical',
	pagination: {
	  clickable: true,
	  el: '.swiper-pagination',
	  type: 'bullets',
	},
	thumbs: {
		swiper: galleryThumbs
	  }
  });

  
  $(document).ready(function () {
    $('.counter-value').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 3500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  });

  $('.clients-carousel').owlCarousel({
	loop: true,
	nav: false,
	autoplay: true,
	autoplayTimeout: 5000,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	smartSpeed: 450,
	margin: 30,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		},
		991: {
			items: 2
		},
		1200: {
			items: 2
		},
		1920: {
			items: 2
		}
	}
});

$(document).ready(function(){
	$('.pp-quote').click(function(){
	  $('.pp-quote').removeClass("active");
	  $(this).addClass("active");
  });
  });
  
  $(document).ready(function(){
	  
		 // hide-top
  
		  $('.li-quote-1').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');
			  $('.quote-text-1').addClass('show');
			  $('.quote-text-1').removeClass('hide-bottom');             
		  });
  
		  $('.li-quote-2').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');
			  $('.quote-text-2').addClass('show');             
			  $('.quote-text-2').removeClass('hide-bottom');
		  });
  
		  $('.li-quote-3').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');         
			  $('.quote-text-3').addClass('show');             
			  $('.quote-text-3').removeClass('hide-bottom');
		  });
		  $('.li-quote-4').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');      
			  $('.quote-text-4').addClass('show');             
			  $('.quote-text-4').removeClass('hide-bottom');
		  });
		  $('.li-quote-5').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');      
			  $('.quote-text-5').addClass('show');             
			  $('.quote-text-5').removeClass('hide-bottom');
		  });
		  $('.li-quote-6').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');      
			  $('.quote-text-6').addClass('show');             
			  $('.quote-text-6').removeClass('hide-bottom');
		  });
		  $('.li-quote-7').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');      
			  $('.quote-text-7').addClass('show');             
			  $('.quote-text-7').removeClass('hide-bottom');
		  });
		  $('.li-quote-8').click(function(e){ 
			  e.stopPropagation();
			  $(".show").addClass('hide-top');
			  $(".hide-top").removeClass('show');      
			  $('.quote-text-8').addClass('show');             
			  $('.quote-text-8').removeClass('hide-bottom');
		  });
			 
	  
  });
  
  
