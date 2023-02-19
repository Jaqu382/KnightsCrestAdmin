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

var database = firebase.database();

function init() {
    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault(); // prevent the form from submitting

        // Get the search criteria from the form
        var firstName = document.getElementById("first-name").value.trim();
        var lastName = document.getElementById("last-name").value.trim();
        var nid = document.getElementById("nid").value.trim();
        var ucfid = document.getElementById("ucfid").value.trim();
        var campus = document.getElementById("campus").value.trim();
    
    
    
    }

}
window.addEventListener("load", init, false);
