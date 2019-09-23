var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  startPosition: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true
    },
    568: {
      items: 1,
      dots: true
    },
    992: {
      items: 1,
      dots: true
    },
    1440: {
      items: 1,
      dots: true
    }
  }
}
);
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [1000])
});
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
});
