$( document ).ready(function() {



  $('.getLocal').click(function() {
    geoFindMe();

  });
  $("#find").click(function() {
    let location = $('#geocomplete').val();
    sessionStorage.setItem('testy',location);
    console.log(location);
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': location}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        sessionStorage.setItem('lastLong', longitude);
        sessionStorage.setItem('lastLat', latitude);
      }
    });
  });

  function geoFindMe() {


    if (!navigator.geolocation){
      return;
    }

    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;



      sessionStorage.setItem('lastLong', longitude);
      sessionStorage.setItem('lastLat', latitude);
    };

    function error() {
       console.log("Unable to retrieve your location");
       sessionStorage.setItem('lastLong', '153.0148202');
       sessionStorage.setItem('lastLat', '-27.4989496');



    };


    navigator.geolocation.getCurrentPosition(success, error);
  }

});
