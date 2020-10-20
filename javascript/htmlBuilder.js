//paint slideshow
var slideIndex = 1;
showSlides(slideIndex);
// Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
$(function(){
    
    $('.createAnAccount').html(createAcountContent);
    $('#createAccountTrig').attr('href','#createAccountModal').addClass('modal-trigger');
    $('.logInModal').html(logInModalContent);
    $('#signInFirebase').attr('href','#logInModal').addClass('modal-trigger');
  
    // *** On Click Functions ***
    
    $("#aboutBtn").on('click', function(){
        $('.homePageContainer').html(aboutContent);
        let instance = M.Sidenav.getInstance(document.getElementById('mobile-demo'));
        instance.close();
    });

    $("#accountBtn").on('click', function(){
        $('.homePageContainer').html(createAcountContentMobile);
        let instance = M.Sidenav.getInstance(document.getElementById('mobile-demo'));
        instance.close();
    });

    $("#logInBtn").on('click', function(){
        $('.homePageContainer').html(logInMobile);
        let instance = M.Sidenav.getInstance(document.getElementById('mobile-demo'));
        instance.close();
    });

    $(document).on('click', '#emailSignInButtonMobile', function(){
        if(!$('#logInEmailDropDownMobile').length){
        $('#appendToMobile').append(logInViaEmailMobile);
        }
        else{
        $('#logInViaEmailContainerMobile').detach();
        }
    });

    $('.aboutButton').on('click', function(){
        $('.homePageContainer').html(aboutContent);
    });

    $('#reportsNavButton').on('click', function(){
        if(testForMobile() === 'notMobile'){
        $('#pageTemplateContainer').html(reportContent);
        }
        else{
        $('#pageTemplateContainer').html(reportContentMobile);    
        }
    });

    $('#queryNavButton').on('click', function(){
        if(testForMobile() === 'notMobile'){
        $('#pageTemplateContainer').html(queryHomePageTabContent);
        }
        else{
        $('#pageTemplateContainer').html(queryHomePageTabContentMobile);    
        }
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
            console.log($('#createAccountEmail').val());
            let email = $('#createAccountEmail').val();
            let password = $('#createPassword2').val();
            createFirebaseEmailAndPasswordUser(email, password);
        }
    });
    $('#loginEmailPasswordDropDown').on('click', function(){
        if($('#emailDropDown').val()!=='' && $('#passwordDropDown').val()!==''){
            let email = $('#emailDropDown').val();
            let password = $('#passwordDropDown').val();
            signInFirebaseEmailAndPassword(email, password);
        }
        else if($('#emailDropDown').val()==='' && $('#passwordDropDown').val()!==''){
            alert("Please enter email!");
        }
        else{
            alert("Please enter password!");
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
    }
}
/**
 * Checks if the user is on a mobile device and if so enters past the control statement
 * @return {string} 'mobile' or 'notMobile'
 */
function testForMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // TODO: replace with @media in css
        // $('.brand-logo').removeAttr('id'); //centers the logo on mobile devices -- remember to refresh in inspector
        return 'mobile';
    }
    else{
        return 'notMobile';
    }
}
/**
 * About page HTML content
 * @type {template literal}
 */
var aboutContent = 
`<h4 class="center-header">Site Developers</h4>
<div class = "container" id="aboutContainer">
    <div class = "row">
        <div class = "col l3 responsiveProfile">
            <div class="card large" id="Bennett-Card">
                <div class="card-image">
                    <img src="images/bgould.jpeg" alt="Bennett Gould, site developer, profile picture">
                    <span class="card-title">Bennett Gould</span>
                </div>
                <div class="card-content">
                    <p>I have interests in computer programming, Microsoft server management, high performance computing, networking, GPU programming (CUDA, pyCUDA), IoT, cybersecurity, and IaaS/SaaS solutions.</p>
                </div>
                <div class="card-action">
                    <p><a href="https://github.com/bpgould" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a><p>
                    <p><a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a><p>
                </div>
            </div>
        </div>
        <div class = "col l3 responsiveProfile">
            <div class="card large" id="Mike-Card">
                <div class="card-image">
                    <img src="images/Mike.jpg" alt="Mike Hill, site developer, profile picture">
                    <span class="card-title">Mike Hill</span>
                </div>
                <div class="card-content">
                    <p>Cyber Intelligence Investigator with a decade of experience in online-based investigations. I aim to leverage my experience and knowledge to develop intuitive solutions for the investigative community.</p>
                </div>
                <div class="card-action">
                    <p><a href="https://github.com/DigitalAmnesia" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a><p>
                    <p><a href="https://www.linkedin.com/in/michaelxhill/"><i class="fas fa-user"></i>&nbspPersonal Website</a><p>
                </div>
            </div>
        </div>
        <div class = "col l3 responsiveProfile">
            <div class="card large" id="Habby-Card">
                <div class="card-image">
                    <img src="images/HabbyA.jpg" alt="Habby Olusesi, site developer, profile picture">
                    <span class="card-title">Habby Olusesi</span>
                </div>
                <div class="card-content">
                    <p>I recently graduated from Wake Forest University with a degree in Theatre and Mathematics. I am currently studying Web Development at the UNC Chapel Hill Coding Bootcamp.</p>
                </div>
                <div class="card-action">
                    <p><a href="https://github.com/habby-bit" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a><p>
                    <p><a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a><p>
                </div>
            </div>
        </div>
        <div class = "col l3 responsiveProfile">
            <div class="card large" id="Elijah-Card">
                <div class="card-image">
                    <img src="images/ElijahMheadshot.jpg" alt="Elijah Melanson, site developer, profile picture">
                    <span class="card-title">Elijah Melanson</span>
                </div>
                <div class="card-content">
                    <p>Berklee-educated guitarist and music educator foraying into web design.  Seeking to create a new career with experience in audio engineering and visual design.</p>
                </div>
                <div class="card-action">
                    <p><a href="https://github.com/emelanson" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a><p>
                    <p><a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a><p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="featureList">
    <ul class="collection with-header">
        <li class="collection-header"><h4 class="center-header">Core Features</h4></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspBadgeriO allows users to gather information about domains, save queries, and generate meaningful reports.<a href="#organicSearch" class="secondary-content">Details</a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspOnce you are logged in, you gain access to a modular, custom, reporting dashboard.<a href="#backIndex" class="secondary-content">Details</a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspAdd your own API keys to unclock the power of Varoius Search APIs.<a href="#commonFile" class="secondary-content">Details</a></div></li>
        <li class="collection-item"><div><i class="fas fa-angle-double-right"></i>&nbspYou are going to have to ask Mike about anything else!<a href="#emailDiscovery" class="secondary-content">Details</a></div></li>
    </ul>
</div>
<div class="container">
    <div class="row">
        <div class="col m11 coreFeatureL">
            <h5 class="center-header" id="organicSearch" >Organic Search Indexing</h5>
            <div class="divider"></div>
            <p>BadgeriO uses advanced queries to dig through the organic search results of popular search engines, to build a clearer picture of the sites’ content quality, structure, and organic reach. </p> 
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonL">Click Me</button>
        </div>
        <div class="col m11 coreFeatureR">
            <h5 class="center-header" id="backIndex" >Backlink Indexing</h5>
            <div class="divider"></div>
            <p>Digging deep into organic search, BadgeriO scours the internet for websites that backlink to your target site.  Giving you valuable insights into potential affiliates, business partners, or internet communities the site is associated with.</p>
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonR">Click Me</button>
        </div>
        <div class="col m11 coreFeatureL">
            <h5 class="center-header" id="commonFile">Common File Search</h5>
            <div class="divider"></div>
            <p>This feature attempts to root through organic search results to find common file types like PDFS, PPTS, DOC, XLS, and SWF.  These documents can be treasure-troves for inside contacts, email addresses, corporate structure, company mission statements, product catalogs, and company policies.</p> 
            <button class="btn btn-flat blue waves-effect waves-light white-text featureButtonL">Click Me</button>
        </div>
        <div class="col m11 coreFeatureR">
            <h5 class="center-header" id="emailDiscovery">Email Discovery</h5>
            <div class="divider"></div>
            <p>Sit back and let BadgeriO attempt to dig up email addresses belonging to your target site.  Discovered email addresses will be returned with sources and their last observed date!</p>
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
    <h5 class="center-header"><img src="images/favicons/BadgeriOIcon.png" style="max-height: 100px; max-width: 100px;"></h5>
        <div class="col s12">
            <div class="row">
                <div class="collection logInOptions">
                    <a class="collection-item logIn" href="#" id="googleSignInButton"><i class="fab fa-google logInIcon" style="color:#DB4437;"></i>&nbspGoogle</a>
                    <a class="collection-item logIn" href="#"><i class="fab fa-facebook-square logInIcon" style="color:#3b5998;"></i>&nbspFacebook</a>
                    <a class="collection-item logIn" href="#"><i class="fab fa-apple logInIcon" style="color:#7D7D7D;"></i>&nbspApple</a>
                    <a class="collection-item logIn" href="#" id="emailSignInButton"><i class="fas fa-envelope logInIcon"></i>&nbspEmail</a>
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
                    <label for='email' id="emailDropDown" class="changeFormTransitionBehavior">Enter your email</label>
                </div>
            </div>
            <div class='row'>
                <div class='input-field col s12'>
                    <input class='validate' type='password' id='password'>
                    <label for='password' id="passwordDropDown" class="changeFormTransitionBehavior">Enter your password</label>
                </div>
            </div>
            <center>
                <div class='row'>
                <button type='submit' name='btn_login' id= "loginEmailPasswordDropDown" class='col s12 btn btn-large waves-effect teal darken-1'>Login</button>
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
        <h5 class="center-header"><img src="images/favicons/BadgeriOIcon.png" style="max-height: 100px; max-width: 100px;"></h5>
        <div class="col s12">
            <div class="card-panel">
                <div class="row">
                    <form class="col s12 m12 l12">
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="createAccountEmail" type="email" class="validate">
                                <label for="createAccountEmail" class="changeFormTransitionBehavior">Your email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="password" type="password" class="validate">
                                <label for="password" class="changeFormTransitionBehavior">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <input id="createPassword2" type="password" class="validate">
                                <label for="createPassword2" class="changeFormTransitionBehavior">Confirm Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s4">
                                <a href="#" class="btn waves-effect waves-light col" id="createAccountButton"><h6>Create</h6></a>
                            </div>
                            <div class="input-field col s3 modal-close" id = "cancel" >
                                <a href="#" class="btn waves-effect waves-light col" id="waves-red"><h6>Cancel</h6></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>`;
/**
 * Reports tab home page html content
 * @type {template literal}
 */
var reportContent =
`<div class="container">
        <div class="row">
            <div class="col s7 push-s5"><span class="flow-text">
                <!-- This form will be where users input data about the movies -->
                <form id="domain-form">
                    <label for="domain-input" class="changeFormTransitionBehavior">Enter Domain Name</label>
                    <input type="text" id="domain-input"><br>
                    <!-- This button will trigger our AJAX call -->
                    <input id="find-domain" type="submit" value="Domain Search">
                </form>
                </span>
            </div>
            <div class="col s5 pull-s7">
                <span class="flow-text">5-columns wide pulled to the left by 7-columns. We should use this space to place some stats</span>
            </div>
        </div> 
        <div class="row">
            <div class="col s12">
                <table id="emailDiscoveryResults">
                    <thead>
                        <tr>
                            <th><b>Domain</b></th>
                            <th><b>FName</b></th>
                            <th><b>LName</b></th>
                            <th><b>Email</b></th>
                            <th><b>Confidence</b></th>
                            <th><b>Extracted On</b></th>
                            <th><b>Last Seen</b></th>
                            <th><b>On Page</b></th>
                            <th><b>Source</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="emailReturnData">
                            <td>badger.com</td>
                            <td>iO</td>
                            <td>Badger</td>
                            <td>iO@BadgeriO.com</td>
                            <td>100</td>
                            <td>2020-10-15</td>
                            <td>2020-10-17</td>
                            <td>Found</td>
                            <td>http://badgerIO.com/</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`;
/**
 * Reports tab home page html content for mobile
 * @type {template literal}
 */
var reportContentMobile =
`<div class="row">
    <h5 class="center-header">Full Dashboards Only Available On Web UI</h5>
    <img src="images/reportCapture.jpg" alt="Image of an example report" class="mobileImage">
</div>`; 
var queryHomePageTabContent =
    `<div class="col s2">
        <img src="images/BadgerIcon.jpg" style="height: 100px; width: 100px;">
        <form id="organic-form">
            <label for="organic-input" class="changeFormTransitionBehavior">Enter Domain Name</label>
            <input type="text" id="organic-input">
            <input id="find-organic" type="submit" value="Organic Search">
        </form>
    </div>
    <div class="col s10">
        <div class="flow-text" style="font-size: medium !important;">
            <p><b><u>Some Details</u></b></p><br>
            <p>Organic URLs Found: <span id="organicURLS"></span></p>
        </div>    
    </div>
    <div class="row">
        <div class="col s12">
            <table id="organicResults" style="min-width: max-content; max-width: 1200; width: 100%; word-break: break-all;">
                <thead>
                    <tr>
                        <th><b><u>Rank</u></b></th>
                        <th><b><u>Title</u></b></th>
                        <th><b><u>URL</u></b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="organicReturnData">
                        <td>X</td>
                        <td>BadgeriO Digg Up Some Domain Intelligence</td>
                        <td>www.badgerIO.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`;  
var queryHomePageTabContentMobile =
`<div class="row">
    <h5 class="center-header">Full Dashboards Only Available On Web UI</h5>
    <img src="images/organicReportForMobile.jpg" alt="Image of an example organic search report" class="mobileImage">
</div>`;     
        