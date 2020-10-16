// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBW1m6pnj5bjwyJJPfo3UKTolBGy2V6gYA",
        authDomain: "seotracker-3e0ec.firebaseapp.com",
        databaseURL: "https://seotracker-3e0ec.firebaseio.com",
        projectId: "seotracker-3e0ec",
        storageBucket: "seotracker-3e0ec.appspot.com",
        messagingSenderId: "807917864943",
        appId: "1:807917864943:web:52562e07a2f714fdb3d81a",
        measurementId: "G-0LJ02T531T"
    };
firebase.initializeApp(firebaseConfig);// Initialize Firebase
// firebase.analytics();

//add recaptcha wall before new user sign in and all other forms

function googleLogInFirebase(){
    checkIfLocal();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;// This gives you a Google Access Token. You can use it to access the Google API.
        var user = result.user;// The signed-in user info.
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log('errorCode: ', errorCode);
        var errorMessage = error.message;
        console.log('errorMessage: ', errorMessage);
        var email = error.email;// The email of the user's account used.
        var credential = error.credential;// The firebase.auth.AuthCredential type that was used.
    });
}
function createFirebaseEmailAndPasswordUser(){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode === 'auth/weak-password'){
                alert('The password is too weak.');
            }
            else{
                alert(errorMessage);
            }
            console.log(error);
        });
}