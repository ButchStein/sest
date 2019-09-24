var elements = $('.modal');

$('#open-button, .sidebar-phone').click(function() {
  elements.addClass('active');
});

$('#close-button').click(function() {
  elements.removeClass('active');
});
