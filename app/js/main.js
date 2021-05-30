$(function(){

  $('.product-slider__nav').slick({
    asNavFor: '.product-slider__for',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false
  });
  $('.product-slider__for').slick({
    asNavFor: '.product-slider__nav',
    arrows: false,
    fade: true,
    draggable: false
  });

  $('.product-one__num').styler({});
     
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.01     
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  $('.filter-star').rateYo({
    starWidth: "12px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "6px",
    readOnly: true
  });
  
  $('.star').rateYo({
    starWidth: "18px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    spacing: "12px",
    readOnly: true
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