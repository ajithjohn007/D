import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";

const db1 = getDatabase();
const firebaseConfig = {
    apiKey: "AIzaSyClMy-RrxkE3mo1I7EtTtq39aDDqBvGz1g",
    authDomain: "doanyjob.firebaseapp.com",
    databaseURL: "https://doanyjob-default-rtdb.firebaseio.com",
    projectId: "doanyjob",
    storageBucket: "doanyjob.appspot.com",
    messagingSenderId: "925346635514",
    appId: "1:925346635514:web:8f7bc38fd1b424130ab343",
    measurementId: "G-MPZLXPJE20"
  };
  firebase.initializeApp(firebaseConfig);
  var jopapplication_db = firebase.database().ref("jobpostingform");

  document.getElementById('jobposting').addEventListener('submit',submitform)

  function submitform(e){
    e.preventDefault();
    var name=getElementVal("name");
    var jobtype=getElementVal("jobType");
    var location=getElementVal("location");
    var contact=getElementVal("contact no");
    var duration=getElementVal("duration");
    var payable=getElementVal("payable");
    var jobdescription=getElementVal("jobDescription");
    console.log(name,jobtype,location,contact,duration,payable,jobdescription);

    saveMessages(name,jobtype,location,contact,duration,payable,jobdescription);

    document.querySelector(".alert").style.display = "block";


    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);


    document.getElementById('jobposting').reset();
  }


  const saveMessages = (name,jobtype,location,contact,duration,payable,jobdescription) => {
    var newjobform = jopapplication_db.push();

    newjobform.set({
        name: name,
        jobtype: jobtype,
        location: location,
        contact:contact,
        duration:duration,
        payable:payable,
        jobdescription:jobdescription,
      });
};

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  //////////////////////////////////////////////

  var leadsRef = firebase.database().ref("jobpostingform");
  leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(snapshot.val());
    });
  });
  var ref = firebase.database().ref("jobpostingform");

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});

  }
