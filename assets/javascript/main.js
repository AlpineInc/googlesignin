var googleAuth;
var googleUser;

gapi.load("auth2", function() {
    googleAuth = gapi.auth2.init({
        client_id: "245751156594-tp337vitvvl9ltm4jhpoirm249v20tsf.apps.googleusercontent.com",
        scope: "profile"
    });
    attachSignin(document.getElementById("#btn-signIn"));
});


function attachSignin(element) {
    console.log(element.id);
    googleAuth.attachClickHandler(element, {},
        function(googleUser) {
            document.getElementById('name').innerText = "Signed in: " +
                googleUser.getBasicProfile().getName();
        },
        function(error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}