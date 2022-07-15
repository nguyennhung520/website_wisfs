function animateNumber(finalNumber, duration = 1000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(100, 9000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('transaction-count').innerText = formattedNumber
    })
    
    animateNumber(90, 9000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(70, 9000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })
    animateNumber(10,9000,0, function(number){
      const formattedNumber = number.toLocaleString()
      document.getElementById('business-count').innerText = formattedNumber
    })
  })


  // Repost
  $(document).ready(function()
{
    if($('.bbb_viewed_slider').length)
    {
        var viewedSlider = $('.bbb_viewed_slider');

        viewedSlider.owlCarousel(
        {
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:6000,
            nav:false,
            dots:false,
            responsive:
            {
                0:{items:1},
                575:{items:2},
                768:{items:3},
                991:{items:4},
                1199:{items:6}
            }
        });

        if($('.bbb_viewed_prev').length)
        {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function()
            {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if($('.bbb_viewed_next').length)
        {
            var next = $('.bbb_viewed_next');
            next.on('click', function()
            {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }


    });