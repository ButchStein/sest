var $menu = $('#my-menu').mmenu({
  extensions: ['fx-menu-slide'],
  navbar: {
    title: 'Основное меню сайта'
  }
});
var $burger = $('.hamburger');
var data = $menu.data('mmenu');

$burger.on('click', function () {
  data.open();
});

data.bind('open:finish', function () {
    $burger.addClass('is-active');
});

data.bind('close:finish', function () {
  $burger.removeClass('is-active');
});