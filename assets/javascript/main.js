var config = {
    apiKey: "AIzaSyCn_oHlHPM8FNCoRm-LrMOXgCI26BYWA_g",
    authDomain: "anytimeistraintime-262fe.firebaseapp.com",
    databaseURL: "https://anytimeistraintime-262fe.firebaseio.com",
    projectId: "anytimeistraintime-262fe",
    storageBucket: "anytimeistraintime-262fe.appspot.com",
    messagingSenderId: "535422035110"
};

firebase.initializeApp(config);
var database = firebase.database();

//button to add the trains to table

$("#submitTrain").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#trainTime").val().trim(); //need to make this a moment to change to am/pm
    var trainFrequency = $("#trainFrequency").val().trim();

    var newTrain = {
        name: trainName,
        destination: destination,
        time: trainTime,
        frequency: trainFrequency
    };
    database.ref().push(newTrain);
    
//make sure that submit train button works properly
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

  $("#trainName").val("");
  $("#destination").val("");
  $("#trainTime").val("");
  $("#trainFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey){

var newTrain = childSnapshot.val().name;
var newDestination = childSnapshot.val().destination;
var newTime = childSnapshot.val().time;
var newFrequency = childSnapshot.val().frequency;

$("#trainTable > tbody").append("<tr><td>" + newTrain + "</td><td>" + newDestination + "</td><td>" +
  newTime + "</td><td>" + newFrequency + "</td><td>");
	
});