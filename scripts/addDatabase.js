  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBI4OxpPSYzATmb7qu21_4GgkW4h9-KXOY",
    authDomain: "knightscrest.firebaseapp.com",
    projectId: "knightscrest",
    storageBucket: "knightscrest.appspot.com",
    messagingSenderId: "595850728642",
    appId: "1:595850728642:web:7885d4b5387a97b91d975b",
    measurementId: "G-M4V6P20S2R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var database = firebase.database();

  // Get the form elements
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var id = document.getElementById("id");
  var nid = document.getElementById("nid");
  var cash = document.getElementById("cash");
  var library = document.getElementById("library");
  var birthday = document.getElementById("birthday");
  var expiration = document.getElementById("expiration");
  var campus = document.getElementById("campus");
  var caste = document.querySelector('input[name="caste"]:checked').value;

  // Listen for the form submit event
  document.myform.addEventListener("submit", function(event) {
    event.preventDefault();

    // Add the data to the database
    database.ref("users/").push({
      first_name: fname.value,
      last_name: lname.value,
      ucf_id: id.value,
      student_nid: nid.value,
      knights_cash_account: cash.value,
      library_account: library.value,
      date_of_birth: birthday.value,
      expiration_date: expiration.value,
      campus: campus.value,
      caste: caste
    });

    // Show a success message to the user
    alert("Record added successfully!");

    // Reset the form fields
    fname.value = "";
    lname.value = "";
    id.value = "";
    nid.value = "";
    cash.value = "";
    library.value = "";
    birthday.value = "";
    expiration.value = "";
    campus.value = "";
  });