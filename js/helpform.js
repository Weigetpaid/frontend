$(".firstStep").click(function (event) {
  $(".form-step-one").hide();
  $(".form-step-two").show();
  event.preventDefault();
});

$(".secondStep").click(function (event) {
  $(".form-step-two").hide();
  $(".form-step-three").show();
  event.preventDefault();
});

function checkButtonValue(buttonValue) {
  document.getElementById('selectedButton').innerHTML = buttonValue;
}

function submitHelpRequest(){
  var name = document.getElementById('nameInput').value;
  var phone = document.getElementById('phoneInput').value;
  var category = document.getElementById('selectedButton').innerHTML;
  var desc = document.getElementById('descriptionInput').value;
  var people = document.getElementById('peopleInput').value;
  var peopleValue = people.value;
  var time = document.getElementById('timeInput').value;
  var timeValue = time.value;

  //Just check if lat/long has been set, it won't be while we are testing it
  //without first going to the home page
  var lat;
  var lng;
  if (sessionStorage.getItem("lastLat") !== null
      || sessionStorage.getItem("lastLong") !== null){
    lat = sessionStorage.getItem("lastLat");
    lng = sessionStorage.getItem("lastLong");
  }
  else {
    //So just set it as brisbane
    lat = 27.4698;
    lng = 153.0251;
  }

  console.log(name, phone, lat, lng, category, desc, people, time)
  newRequest(name, phone, lat, lng, category, desc, people, time);
}
