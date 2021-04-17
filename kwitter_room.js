
var firebaseConfig = {
      apiKey: "AIzaSyBP-8GNKf2MJj4bEeodaNN5UuIzn-Eppdk",
      authDomain: "kwitter-d6c7e.firebaseapp.com",
      projectId: "kwitter-d6c7e",
      storageBucket: "kwitter-d6c7e.appspot.com",
      messagingSenderId: "1049817585438",
      appId: "1:1049817585438:web:9fd482a6e91dcc849d5b0f"
};
firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose = "adding room name"
      });
      localStorage.setItem(room_name,"room_name");
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick=redirecToRoomName(this.id)>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      name= message_data['name'];
message = message_data['message'];
like = message_data['message'];
name_with_tag = "<h4>"+name+" <image class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+ firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class=glyphicon glyphicon-thumbs-up> Like:"+like+"</span></button><hr>";

row= name_with_tag+message_with_tag+like_button+span_with_tag;
doucument.getElementbyId("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecToRoomName(name){
      ocalStorage.setItem(room_name,"name");
      window.location="kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";

}
function update_Like(message_id){
      button_id=message_id;
      likes=doucment.getElmentById(button_id).value;
      updated_likes=Number(likes)+1;
      
      firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
      });
    }
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
    }


