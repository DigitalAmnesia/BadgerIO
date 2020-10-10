//Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
//using $('.class').load('htmlFileName.html');
//this will allow for much cleaner front end development without useing a templater like handlebars
// $('.modalContent').load('modalExample.html body');
// $('#modalTrigger').attr('href','#modal1')
$(function(){
    testForMobile();
    $('.modalContent').html(modalz);
    $('#modalTrigger').attr('href','#modal1').addClass('modal-trigger');
    $('.createAnAccount').html(createAcountContent);
    $('#createAccountTrig').attr('href','#createAccountModal').addClass('modal-trigger');
  
    
    //initialize Materialize content last so that it is available
    $('.modal').modal(); //needed in order to initialize Materialize modals
    $('.sidenav').sidenav(); //needed in order to initialize side bar for mobile menu

    // $('#modal1').modal('open'); //one useful way to fire a modal programaticly 
});

function testForMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('.brand-logo').removeAttr('id'); //centers the logo on mobile devices -- remember to refresh in inspector
    }
}
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
var createAcountContent =
`<div id="createAccountModal" class="modal">
    <div class="row modal-content">
        <div class="col s12">
            <div class="card-panel">
                <div class="row">
                    <form class="col s12 m12 l12">
                        <div class="row">
                            <div class="input-field col s8">
                                <i class="mdi-communication-email prefix"></i>
                                <input id="email" type="email" class="validate">
                                <label for="email">Your email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s8">
                                <i class="mdi-action-lock-outline prefix"></i>
                                <input id="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s8">
                                <i class="mdi-action-lock-outline prefix"></i>
                                <input id="password" type="password" class="validate">
                                <label for="password">Confirm Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 modal-close">
                                <a href="#" class="btn waves-effect waves-light col "><h6>Create Account</h6></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>`;