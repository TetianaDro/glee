$(function(){

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

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

  $('.related-slider__items').slick({
    slidesToShow: 4,    
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '1px',
    appendArrows: $('.related-slider__arrow'),
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>',
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