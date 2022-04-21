// Setting All Vareible
const auth = firebase.auth()
var user = auth.currentUser
const db = firebase.firestore()

const backButton = document.getElementById('Login')


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
                    text:`please wait 3 sec..`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                }).then((result) => {
                    if (result.isDismissed) {
                        gotologin()
                    }
                  })
          

                auth.signInWithEmailAndPassword(email, password)

                db.collection("EATRAIDEE").doc(email).set({
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
                Swal.fire({
                    icon: 'warning',
                    title: 'This email is already in use',
                    text:`please use new email`,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
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
function gotologin(){
    window.location.href="../loginPage/index.html"
}