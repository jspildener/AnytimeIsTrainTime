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
      var trainTime = $("#trainTime").val().trim();  //need to make this a moment with military time
      var trainFrequency = $("#trainFrequency").val().trim();

var newTrain = {
	name: trainName,
	destination: destination,
	time: trainTime,
	frequency: trainFrequency
};

  });