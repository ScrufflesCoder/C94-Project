var firebaseConfig = {
      apiKey: "AIzaSyBjSY2kdps0-e0qKv_oMxX_joeFPddhliE",
      authDomain: "let-schatdatabase.firebaseapp.com",
      firebaseURL: "https://let-schatdatabase-default-rtdb.firebaseio.com/",
      projectId: "let-schatdatabase",
      storageBucket: "let-schatdatabase.appspot.com",
      messagingSenderId: "423604419163",
      appId: "1:423604419163:web:57e03fee70ae64e8039d7e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
