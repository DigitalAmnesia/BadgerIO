//Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
//using $('.class').load('htmlFileName.html');
//this will allow for much cleaner front end development without useing a templater like handlebars
// $('.modalContent').load('modalExample.html body');
// $('#modalTrigger').attr('href','#modal1')
var modalz = 
`<div id="modal1" class="modal">
    <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
</div>`;


$(function(){
    $('.modalContent').html(modalz);
    $('#modalTrigger').attr('href','#modal1').addClass('modal-trigger');
    $('.modal').modal(); //needed in order to initialize Materialize modals
    $('.sidenav').sidenav(); //needed in order to initialize side bar for mobile menu
    
    // $('#modal1').modal('open'); //one useful way to fire a modal programaticly 
});

