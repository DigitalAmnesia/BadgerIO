var logInMobile = 
`<div class="row" id="appendToMobile">
    <h5 class="center-header"><img src="images/favicons/BadgeriOIcon.png" style="max-height: 100px; max-width: 100px;"></h5>
    <div class="col s12">
        <div class="row">
            <div class="collection logInOptions">
                <a class="collection-item logIn" id="googleSignInButtonMobile"><i class="fab fa-google logInIcon" style="color:#DB4437;"></i>&nbspGoogle</a>
                <a class="collection-item logIn"><i class="fab fa-facebook-square logInIcon" style="color:#3b5998;"></i>&nbspFacebook</a>
                <a class="collection-item logIn"><i class="fab fa-apple logInIcon" style="color:#7D7D7D;"></i>&nbspApple</a>
                <a class="collection-item logIn" id="emailSignInButtonMobile"><i class="fas fa-envelope logInIcon"></i>&nbspEmail</a>
            </div>     
        </div>
    </div>
</div>`;
var logInViaEmailMobile = 
`<center id="logInViaEmailContainerMobile">
<div class="container" id="logInEmailDropDownMobile">
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