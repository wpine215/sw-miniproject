var auth2;

/**
 * Initializes the Sign-In client.
 */
var initClient = function() {
    gapi.load('auth2', function(){
        /**
         * Retrieve the singleton for the GoogleAuth library and set up the
         * client.
         */
        auth2 = gapi.auth2.init({
            client_id: '360235154817-5chefe7uit1ed1tq3v7ke6t0ndtotf7l.apps.googleusercontent.com'
        });

        // Attach the click handler to the sign-in button
        auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
    });
};

var onSuccess = function(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
};

var onFailure = function(error) {
    console.log(error);
};

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); 
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  
  var myUserEntity = {};
  myUserEntity.Id = profile.getId();
  myUserEntity.Name = profile.getName();
  myUserEntity.Email = profile.getEmail();
  
  //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
  sessionStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));
  window.location.href='index.html';
}

function logout() {
    //Don't forget to clear sessionStorage when user logs out
    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2.signOut().then(function () {
    //     console.log('User signed out.');
    // });
    sessionStorage.clear();
}

function checkIfLoggedIn() {
  if (sessionStorage.getItem('myUserEntity') == null) {
    //Redirect to login page, no user entity available in sessionStorage
    window.location.href='login.html';
  } else {
    //User already logged in
    var userEntity = {};
    userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
    if (userEntity.Email != "wpine215@gmail.com") {
        logout();
        window.location.href='login.html';
    } else {
        console.log("sign in successful");
    }
  }
}
