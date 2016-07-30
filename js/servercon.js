function newRequest(name, phonenumber, lat, lng) {
	console.log("Fuck");
	
	$.ajax({
	  url: "http://api.weigetpaid.timhadwen.com/request",
	  type:"POST",
	  data: JSON.stringify({phone: phonenumber, name: name, lat: lat, lng: lng}),
	  contentType: "application/json",
	  dataType: "json",
	  success: function(){
	    console.log("Sent to server");
	  }
	});
}

function getRequests() {
	$.ajax({
	    url: "http://api.weigetpaid.timhadwen.com/request",
	    type: "GET",
	    contentType: 'application/json; charset=utf-8',
	    success: function(resultData) {
	        //here is your json.
	          // process it
	          console.log(resultData);
	          return resultData;
	    },
	    error : function(jqXHR, textStatus, errorThrown) {
	    },
	
	    timeout: 120000,
	});
}