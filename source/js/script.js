var elements = $('.modal');

$('#call_me').click(function() {
  elements.addClass('active');
});

$('#close-button').click(function() {
  elements.removeClass('active');
});
