//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class= 'message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='+firebase_message_id+"value="+like+" onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function update_like(message_id)
{
      console.log("clicked on like button-"+message_id)
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_like=Number(likes)+1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({like:update_like});
}

function logout()
{
      localStorage.removeItem("user_name");
      localStroge.removeItem("room_name");
      window.location.replace("index.html")
}