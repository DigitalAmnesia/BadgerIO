//Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
//using $('.class').load('htmlFileName.html');
//this will allow for much cleaner front end development without useing a templater like handlebars
// $('.modalContent').load('modalExample.html body');
// $('#modalTrigger').attr('href','#modal1')
$(function(){
    // $('.modalContent').append($('#template').html());
    
    $('.modal').modal();
    $('#modalTrigger').attr('href','#modal1').addClass('modal-trigger');
    // $('#modal1').modal('open');
});


