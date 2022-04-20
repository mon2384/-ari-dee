const db = firebase.firestore()
const auth = firebase.auth()
var user = auth.currentUser
var email = user

var lS = db.collection('EATRAIDEE').doc(email).collection("UserInfo").doc("userLogin")
document.getElementById('username').innerText = "Username : " + localStorage.getItem('Username')