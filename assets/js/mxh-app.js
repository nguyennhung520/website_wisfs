
    var swiper =
        new Swiper('.swiper-container', {
            slidesPerView: '1',
            spaceBetween: 0,
            autoplay: false,
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        }
        );



 window.addEventListener('load', () => {
let portfolioContainer = select('.portfolio-container');
if (portfolioContainer) {
  let portfolioIsotope = new Isotope(portfolioContainer, {
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  
  let portfolioFilters = select('#portfolio-flters li', true);

  on('click', '#portfolio-flters li', function(e) {
    e.preventDefault();
    portfolioFilters.forEach(function(el) {
      el.classList.remove('filter-active');
    });
    this.classList.add('filter-active');

    portfolioIsotope.arrange({
      filter: this.getAttribute('data-filter')
    });
    portfolioIsotope.on('arrangeComplete', function() {
      AOS.refresh()
    });
  }, true);
}

});