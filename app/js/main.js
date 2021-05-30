$(function(){

  $(".filter-star").rateYo({
    starWidth: "12px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "6px"
  });

  $(".shop-content__star").rateYo({
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "12px"
  });

  $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        step: 0.01,       
        
    });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});