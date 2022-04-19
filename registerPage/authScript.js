// Setting All Vareible
const auth = firebase.auth()
var user = auth.currentUser
const db = firebase.firestore()

const backButton = document.getElementById('Login')
backButton.addEventListener('click',backLogin)
function backLogin(){
    window.location.href = 'index.html'
}

const signUpButton = document.getElementById('submitButton')
signUpButton.addEventListener('click', register)
function register() {
    if (!getErrorInput()) { // Success Register
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user = userCredential.user
                // console.log("Success")
                Swal.fire({
                    icon: 'success',
                    title: 'Register Success',
                    text: 'Thanks you',
                })

                auth.signInWithEmailAndPassword(email, password)

                db.collection("User").doc(user.uid).set({
                    Username: username,
                    Email: email,
                    Password: password,
                    UID: user.uid,
                    Role: "User"
                })
                console.log("Success")
                resetAllInput()

            })
            .catch((error) => {
                var errorCode = error.code
                var errorMessage = error.message
                console.log("Error " + errorCode + " : " + errorMessage)
            })
    }
    else {
        alert("Error working in this Page!!!")
    }
}

function getUsername(){
    var username = getElementById('username').value
    return username
}