//paint slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
$(function(){
    testForMobile();
    $('.createAnAccount').html(createAcountContent);
    $('#createAccountTrig').attr('href','#createAccountModal').addClass('modal-trigger');
    $('.logInModal').html(logInModalContent);
    $('#signInFirebase').attr('href','#logInModal').addClass('modal-trigger');
  
    // *** On Click Functions ***
    $('.aboutButton').on('click', function(){
        $('.homePageContainer').html(aboutContent);
    });
    $('#emailSignInButton').on('click', function(){
        if(!$('#logInEmailDropDown').length){
        $('#appendToModal').append(logInViaEmail);
        }
        else{
        $('#logInViaEmailContainer').detach();
        }
    });
    $('#googleSignInButton').on('click', function(){
        googleLogInFirebase();
    });
    $('#createAccountButton').on('click', function(){
        checkIfLocal();
        if($('#createPassword2').hasClass('valid')){
            createFirebaseEmailAndPasswordUser($('#createAccountEmail').val(),$('#createPassword2').val());
        }
    });
    $('createPassword').on('focusout', function(e){
        if ($(this).val() !== $("#createPassword2").val()){
            $("#createPassword2").removeClass("valid").addClass("invalid");
        }
        else{
            $("#createPassword2").removeClass("invalid").addClass("valid");
        }
    });
    $("#createPassword2").on("keyup", function (e){
        if ($('#createPassword').val() !== $(this).val()){
            $(this).removeClass("valid").addClass("invalid");
        } 
        else{
            $(this).removeClass("invalid").addClass("valid");
        }
    });

    //initialize Materialize content last so that it is rendered
    $('.modal').modal(); //needed in order to initialize Materialize modals
    $('.sidenav').sidenav(); //needed in order to initialize side bar for mobile menu
});
/**
 * Dots action, iterates slide show 
 * @param {number} n 
 * @return {void}
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/**
 * Iterates Slide Show to next slide
 * @param {number} n 
 * @return {void}
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}
/**
 * Uses helper functions to determine which picture to paint after user actions performed
 * @param {number} n 
 * @return {void}
 */
function showSlides(n) {
    var slides = $(".mySlides");
    var dots = $(".dot");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//space before active needed
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";//space before active needed
} 
/**
 * Automatically cycles through slies on timer
 * @return {void}
 */
function showSlidesAuto() {
    slideIndex = 0;
    var slides = $(".mySlides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
/**
 * Call this function if you want to remind developers that they are running code locally and certain features may not work 
 * the same way as when running on server
 * @return {void}
*/
function checkIfLocal(){
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
        alert("Google Sign in only works from HTTP/S, not local!");//reminder to devs
        //getKeys();
    }
}
//TODO: getKeys() not working, figure out a way to load API keys from .gitignored file for local testing
/**
 * This is a function for getting API keys when running locally, it reads in the APIkeys2.txt file
 * @return {string[]}
 */
function getKeys(){
    let file = $('<file>').attr('href','file:APIkeys2.txt');
    let reader = new FileReader();
    reader.addEventListener('load', function(e){
        let text = e.target.result;
        alert(text);
    });
    reader.readAsText(file);
}
/**
 * Checks if the user is on a mobile device and if so enters past the control statement
 * @return {void}
 */
function testForMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('.brand-logo').removeAttr('id'); //centers the logo on mobile devices -- remember to refresh in inspector
        //remove tab images since they do not wrap for mobile devices
    }
}
/**
 * About page HTML content
 * @type {template literal}
 */
var aboutContent = 
`<h4 class="center-header">Site Developers</h4>
<div class="aboutContainer">
    <div class="card medium" id="Bennett-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Bennett Gould</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/bpgould" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Mike-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Mike Hill</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/DigitalAmnesia" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Habby-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Habby Olusesi</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/habby-bit" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Elijah-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Elijah Melanson</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/emelanson" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
</div>
<div class="featureList">
    <ul class="collection with-header">
        <li class="collection-header"><h4 class="center-header">Core Features</h4></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspBadgeriO allows users to gather information about domains, save queries, and generate meaningful reports.<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspOnce logged in, you gain access to a modular, custom, reporting dashboard.<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspAdd your own API keys to unclock the power of Google x,y,z APIs.<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspYou are going to have to ask Mike about anything else!<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
    </ul>
</div>
<div class="container">
    <div class="row">
        <div class="col m11 coreFeatureL">
            <h5 class="center-header">Feature 1</h5>
            <div class="divider"></div>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics,
            raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation.
            Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p> 
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonL">Click Me</button>
        </div>
        <div class="col m11 coreFeatureR">
            <h5 class="center-header">Feature 2</h5>
            <div class="divider"></div>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics,
            raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation.
            Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonR">Click Me</button>
        </div>
        <div class="col m11 coreFeatureL">
            <h5 class="center-header">Feature 3</h5>
            <div class="divider"></div>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics,
            raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation.
            Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p> 
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonL">Click Me</button>
        </div>
        <div class="col m11 coreFeatureR">
            <h5 class="center-header">Feature 4</h5>
            <div class="divider"></div>
            <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics,
            raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation.
            Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonR">Click Me</button>
        </div>
    </div>
</div>`;
/**
 * Log In modal offering different methods to login
 * @type {template literal}
 */
var logInModalContent = 
`<div id="logInModal" class="modal">
    <div class="row modal-content" id="appendToModal">
    <h5 class="center-header">SEO Tracker</h5>
        <div class="col s12">
            <div class="row">
                <div class="collection logInOptions">
                    <a class="collection-item logIn" id="googleSignInButton"><i class="fab fa-google logInIcon" style="color:#DB4437;"></i>&nbspGoogle Sign In</a>
                    <a class="collection-item logIn"><i class="fab fa-facebook-square logInIcon" style="color:#3b5998;"></i>&nbspFacebook Sign In</a>
                    <a class="collection-item logIn"><i class="fab fa-apple logInIcon" style="color:#7D7D7D;"></i>&nbspApple Sign In</a>
                    <a class="collection-item logIn" id="emailSignInButton"><i class="fas fa-envelope logInIcon"></i>&nbspEmail Sign In</a>
                </div>     
            </div>
        </div>
    </div>
</div>`;
/**
 * Option to login with email and password, dynamically added to modal after click event
 * @type {template literal}
 */
var logInViaEmail = 
`<center id="logInViaEmailContainer">
<div class="container" id="logInEmailDropDown">
    <div class="z-depth-1 white row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
        <form class="col s12">
            <div class='row'>
                <div class='input-field col s12'>
                    <input class='validate' type='email' id='email'>
                    <label for='email' class="changeFormTransitionBehavior">Enter your email</label>
                </div>
            </div>
            <div class='row'>
                <div class='input-field col s12'>
                    <input class='validate' type='password' id='password'>
                    <label for='password' class="changeFormTransitionBehavior">Enter your password</label>
                </div>
            </div>
            <center>
                <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect teal darken-1'>Login</button>
                </div>
                <div class="row">
                <label><a class='red-text' href='#!'>Forgot Password?</a></label>
                </div>
            </center>
        </form>
    </div>
</div>
</center>`;
/**
 * Log In Modal alternative design format, comment out '1' to use
 * @type {template literal}
 */
var logInModalContentAlt =
`<div id="logInModal" class="modal">
    <h5 class="center-header">SEO Tracker</h5>
    <div class="col s12 modal-content">
        <div class="row">
            <div class="card-panel logIn">
            <i class="fab fa-google" style="color:#DB4437;"></i>
            <a class="logIn">&nbspGoogle Sign In</a>
            </div>
        </div>
    </div>
</div>`;
/**
 * Create An Account modal HTML content
 * @type {template literal}
 */
var createAcountContent =
`<div id="createAccountModal" class="modal">
    <div class="row modal-content">
        <h5 class="center-header">SEO Tracker</h5>
        <div class="col s12">
            <div class="card-panel">
                <div class="row">
                    <form class="col s12 m12 l12">
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="creatAccountEmail" type="email" class="validate">
                                <label for="createAccountEmail" class="changeFormTransitionBehavior">Your email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="createPassword" type="password" class="validate">
                                <label for="createPassword" class="changeFormTransitionBehavior">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="createPassword2" type="password" class="validate">
                                <label for="createPassword2" class="changeFormTransitionBehavior">Confirm Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s4 modal-close">
                                <a href="#" class="btn waves-effect waves-light col" id="createAccountButton"><h6>Create Account</h6></a>
                            </div>
                            <div class="input-field col s3 modal-close">
                                <a href="#" class="btn waves-effect waves-light col" id="waves-red"><h6>Cancel</h6></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>`;