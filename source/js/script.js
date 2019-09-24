var elements = $('.modal-overlay, .modal');

$('#open-button').click(function(){
    elements.addClass('active');

});

$('#close-button').click(function(){
    elements.removeClass('active');
});
