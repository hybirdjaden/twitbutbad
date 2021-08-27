
var firebaseConfig = {

      apiKey: "AIzaSyAedTtyNIxFttJ1bv07dU_l3uy-VYUtsCM",
  
      authDomain: "twitter-but-bad.firebaseapp.com",
  
      databaseURL: "https://twitter-but-bad-default-rtdb.firebaseio.com",
  
      projectId: "twitter-but-bad",
  
      storageBucket: "twitter-but-bad.appspot.com",
  
      messagingSenderId: "187309463592",
  
      appId: "1:187309463592:web:075f7a0f91d97caea67d1d"
  
    };
  
    // Initialize Firebase
  
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name +" !";
    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("roomname-"+Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();
 function redirecttoroomname(name) {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
 function Logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }