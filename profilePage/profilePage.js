const db = firebase.firestore()
const auth = firebase.auth()
var user = auth.currentUser





document.getElementById('username').innerText = "Username : " + localStorage.getItem('Username')
document.getElementById('email').innerText =    "Email    : " + localStorage.getItem('Email')