const db = firebase.firestore()
const auth = firebase.auth()
var user = auth.currentUser
let tdee;
let bmr = 1800;





document.getElementById('username').innerText = "Username : " + localStorage.getItem('Username')
document.getElementById('email').innerText =    "Email    : " + localStorage.getItem('Email')






function Logout() {
  
    auth.signOut() //<<< นี่คือคำสั่ง Logout
    .then(() => {
      console.log("Successfully Sign out");

      Swal.fire({
        icon: 'success',
        title: 'lol...',
        text: `GOODBYE ${email}`,
        text:`please wait 3 sec..`,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    .then((result) => {
        if (result.isDismissed) {
          openlg()
        }
      })
        
  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error " + errorCode + " : " + errorMessage);
    });
  }
  function openlg(){

    window.location.href = '../loginPage/index.html'
  }


  function bmrXtdee(){
    let aws = bmr *  tdee
    document.getElementById('Energypdcal').innerText = "Energy/day : "+aws+ " kcal";

  }

