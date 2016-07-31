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
  var lat = sessionStorage.getItem("lastLat");
  var lng = sessionStorage.getItem("lastLong");

  console.log(name, phone, lat, lng, category, desc, people, time)
  newRequest(name, phone, lat, lng, category, desc, people, time);
}
