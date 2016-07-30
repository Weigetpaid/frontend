function newRequest(name, phonenumber, lat, lng) {
  console.log("Fuck");
  var myJSONData = "{'phone': '0402437937', 'name': 'Fuck McFuck','lat': '127','lng': '128'}";
    $.ajax({
      type: 'POST',
      url: 'http://api.weigetpaid.timhadwen.com/request',
      data: myJSONData,
      dataType: 'application/json',
      success: function(data) {
        console.log("Success");
      }
  });   // Ajax Call
}

newRequest("Dick Butts", 04024377777, 100, 100);
