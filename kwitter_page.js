
var firebaseConfig = {
      apiKey: "AIzaSyBP-8GNKf2MJj4bEeodaNN5UuIzn-Eppdk",
      authDomain: "kwitter-d6c7e.firebaseapp.com",
      projectId: "kwitter-d6c7e",
      storageBucket: "kwitter-d6c7e.appspot.com",
      messagingSenderId: "1049817585438",
      appId: "1:1049817585438:web:9fd482a6e91dcc849d5b0f"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     row="<div class='room_name' id="+Room_names+"onclick=redirecToRoomName(this.id)>"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
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

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
            name:user_name,
            msg=message,
            like=0
      })
}