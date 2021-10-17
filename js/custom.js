$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});
jQuery('.bannerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: true,
    arrows: false,
    infinite: true
});
jQuery('.clientsays-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: true,
  arrows: false,
  infinite: true
});

jQuery('.ourblog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover:false,
    autoplaySpeed:3000,
    dots: false,
    arrows: true,
    infinite: true,
    responsive: [
        
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
jQuery('.ourteam-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: true,
  arrows: false,
  infinite: true,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
