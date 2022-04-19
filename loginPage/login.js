const db = firebase.firestore()
const auth = firebase.auth()
var user = auth.currentUser
let loginButton = document.getElementById("lgbtn")


function goreg(){
    window.location.href = '../Register.html'
}

/*function REG() {
    var email = document.getElementById("emailField").value; /// ตัวแปร pass จะเก็บข้อมูล String จากกล่องข้อความ ที่มี ID emailField
    var pass = document.getElementById("passField").value; /// ตัวแปร pass จะเก็บข้อมูล String จากกล่องข้อความ ที่มี ID passField
  
    auth.createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => { 

      user = userCredential.user;

      console.log("Successfully Registered with (" + email + ")" );
      

      db.collection("EATRAIDEE").doc(email).collection("UserInfo").doc("userLogin").set({
        Email : email,
        UID : user.uid,
        Password : pass
      
      });
  
      })
      .catch((error) => { ///ส่วนนี้ ใช้แสดง Error ขึ้นบน console.log
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error " + errorCode + " : " + errorMessage);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `WTF WITH EMAIL`,
        })
      });
  }
  */
  function Loginnow() {

    var email = document.getElementById("emailField").value;
    var pass = document.getElementById("passField").value;
  
    auth.signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        user = userCredential.user;
  
        console.log("Successfully Sign in");
        Swal.fire({
            icon: 'success',
            title: `Welcome ${email}`,
            text: `Havefun`,

        })
        
        openrl()
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error " + errorCode + " : " + errorMessage);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Don't Have This User In Database OR Password is invalid`,})
      });
  
  }
  
  function Logout() {
  
    auth.signOut() //<<< นี่คือคำสั่ง Logout
    .then(() => {
        var email = document.getElementById("emailField").value;
      console.log("Successfully Sign out");

      Swal.fire({
        icon: 'success',
        title: 'lol...',
        text: `GOODBYE ${email}`,})
        
  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error " + errorCode + " : " + errorMessage);
    });
  }


  function openrl(){
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }