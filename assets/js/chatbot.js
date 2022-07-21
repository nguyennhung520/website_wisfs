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
 
    
// Number
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
  animateNumber(980, 6000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('transaction-count').innerText = formattedNumber
  })
  
  animateNumber(50, 12000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('city-count').innerText = formattedNumber
  })
  
  animateNumber(109, 9000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('customer-count').innerText = formattedNumber
  })
  animateNumber(550,9000,0, function(number){
    const formattedNumber = number.toLocaleString()
    document.getElementById('business-count').innerText = formattedNumber
  })
})

