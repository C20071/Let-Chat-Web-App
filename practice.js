var firebaseConfig = {
    apiKey: "AIzaSyBP-8GNKf2MJj4bEeodaNN5UuIzn-Eppdk",
    authDomain: "kwitter-d6c7e.firebaseapp.com",
    databaseURL: "https://kwitter-d6c7e-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6c7e",
    storageBucket: "kwitter-d6c7e.appspot.com",
    messagingSenderId: "1049817585438",
    appId: "1:1049817585438:web:dfe53a78935bb3a09d5b0f"
  };
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name= document.getElementById("user_name").value;
      firebase().database().ref("/").child(user_name).update({
          purpose : "adding user"
      });

  }
