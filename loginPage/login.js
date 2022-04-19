const auth = firebase.auth();
const db = firebase.firestore();



 var email,pass;
function set(){
    email = document.getElementById('email').value;
    pass = document.getElementById('password').value;
}
var lgbt = document.getElementById('lgbtn');
lgbt.addEventListener('click',loginnowforfree)
function loginnowforfree(){
    set()
    auth.signInWithEmailAndPassword(email, pass)
    .then((userCredential) =>  {
        console.log("Successfully Sign in");
        alert('123')


    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error " + errorCode + " : " + errorMessage);

    })
    
}
