
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzu7H8f97ab6gM_YYkLAt61Hd8HdXIwVg",
  authDomain: "class-6b4c2.firebaseapp.com",
  databaseURL: "https://class-6b4c2.firebaseio.com",
  projectId: "class-6b4c2",
  storageBucket: "class-6b4c2.appspot.com",
  messagingSenderId: "189636493110",
  appId: "1:189636493110:web:a98efd32aa0e194c1b3d97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStroge.removeItem("room_name");
      window.location.replace("index.html")
}


