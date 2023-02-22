// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI4OxpPSYzATmb7qu21_4GgkW4h9-KXOY",
    authDomain: "knightscrest.firebaseapp.com",
    projectId: "knightscrest",
    storageBucket: "knightscrest.appspot.com",
    messagingSenderId: "595850728642",
    appId: "1:595850728642:web:7885d4b5387a97b91d975b",
    measurementId: "G-M4V6P20S2R",
    databaseURL: "https://knightscrest-default-rtdb.firebaseio.com/"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();

  function init() {
    // Get the UCF ID from the URL query parameter
    var urlParams = new URLSearchParams(window.location.search);
    var ucfid = urlParams.get('ucfid');
    
    // Get a reference to the user's data in Firebase
    var userRef = database.ref('users').orderByChild('ucf_id').equalTo(ucfid);
    
    // Fetch the user's data from Firebase
    userRef.once('value', function(snapshot) {
      // Get the user's data
      var userData = snapshot.val()[ucfid];
      
      // Display the user's data on the page
      var firstName = document.querySelector('#firstName');
      var lastName = document.querySelector('#lastName');
      var nid = document.querySelector('#nid');
      var ucfid = document.querySelector('#ucfid');
      var campus = document.querySelector('#campus');
      var cashNumber = document.querySelector('#cash');
      var libraryNumber = document.querySelector('#library');
      var dob = document.querySelector('#dob');
      firstName.textContent = userData.first_name;
      lastName.textContent = userData.last_name;
      nid.textContent = userData.student_nid;
      ucfid.textContent = userData.ucf_id;
      campus.textContent = userData.campus;
      cashNumber.textContent = userData.knights_cash_account;
      libraryNumber.textContent = userData.library_account;
      dob.textContent = userData.date_of_birth;
    });
  }
  
  window.addEventListener("load", init, false);