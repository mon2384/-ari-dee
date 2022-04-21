const db = firebase.firestore()
const auth = firebase.auth()
var user = auth.currentUser
var now = db.collection("EATRAIDEE").doc(email).collection("profile").doc('profile')
let tdee;
let bmr 
var email =localStorage.getItem('Email')
var heig,weig,ageg,sex

RetriveData()
document.getElementById('username').innerText = "Username : " + localStorage.getItem('Username')
document.getElementById('email').innerText =    "Email    : " + localStorage.getItem('Email')


function BMR(kg,cm,age,gender){
  
  if(gender[0] == 'm'){
      bmr =  66 + (13.7 * kg) + (5 * cm) - (6.8 * age)
  }else if (gender[0] == 'f'){
      bmr = 665 + (9.6 * kg) + (1.8 * cm) - (4.7 * age)
  }else{
      console.log("WRONG!!");
      return 0;
  }
  return bmr;
}




function Logout() {
  
    auth.signOut() //<<< นี่คือคำสั่ง Logout
    .then(() => {
      console.log("Successfully Sign out");

      Swal.fire({
        icon: 'success',
        title: 'lol... ',
        title: `GOODBYE ${localStorage.getItem('Email')}`,
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

  function editepfp(){
    Swal.fire({
      title: 'Login Form',
      html: `
      <input type="number" id="h" class="swal2-input" placeholder="Height(cm)">
      <input type="number" id="w" class="swal2-input" placeholder="Weight(kg)">
      <input type="humber" id="y" class="swal2-input" placeholder="Age(yrs)">
      <select id="g">
        <option value="male" >กรุณาเลือกเพศ(default:ชาย)</option>
        <option value="male" >ชาย </option>
        <option value="female">หญิง</option>
      </select>



      `,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const weight = Swal.getPopup().querySelector('#w').value
        const height = Swal.getPopup().querySelector('#h').value
        const age = Swal.getPopup().querySelector('#y').value
        const gender = Swal.getPopup().querySelector('#g').value

        
        if (!weight || !height ||!age ||!gender) {
          Swal.showValidationMessage(`Please enter your profile`)
        }
        return { we: weight, he: height, ag: age,ge: gender }
      }


    }).then((result) => {
      Swal.fire(`
        height: ${result.value.he} cm
        weight: ${result.value.we} kg
        Age   : ${result.value.ag} yrs
        Gender : ${result.value.ge}
      `
      .trim())

      db.collection("EATRAIDEE").doc(email).collection("profile").doc('profile').set({

        weight: result.value.we,
        height: result.value.he,
        Age   : result.value.ag,
        Gender : result.value.ge
      })


    })
    

  }

  function RetriveData() {
    db.collection("EATRAIDEE").doc(email).collection("profile").doc('profile').get()
      .then(function (doc) {
        if(doc.exists){
          heig = doc.data().height;
          weig = doc.data().weight;
          ageg = doc.data().Age;
          sex = doc.data().Gender;
          document.getElementById('height').innerText = "height : " + heig +" cm"
          document.getElementById('weight').innerText = "weight : " + weig +" kg"
          document.getElementById('Age').innerText = "Age : " + ageg +" yrs"
          document.getElementById('Gender').innerText = "Gender : " + sex
          bmr = Math.ceil(BMR(weig,heig,ageg,sex))
        }
        else{
          console.log("does not exist")
          alert("Successfully")
        }
      })
      .catch(function(error){
        console.log("error",error)
      })
  }

