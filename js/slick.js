window.addEventListener('DOMContentLoaded', function(){
var $slide = $(".slide")
  .slick({
    fade: true,
    speed: 150,
    autoplaySpeed: 3000,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  });
});

