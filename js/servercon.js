function newRequest(name, phonenumber, lat, lng, category, desc, numpeople, timeestimate) {
	console.log("Fuck");

	$.ajax({
	  url: "http://weigetpaid.timhadwen.com/api/request",
	  type:"POST",
	  data: JSON.stringify({phone: phonenumber, name: name, lat: lat, lng: lng, name: name, category: category, desc: desc, numpeople: numpeople, timeestimate: timeestimate}),
	  contentType: "application/json",
	  dataType: "json",
	  success: function(){
	    console.log("Sent to server");
	  }
	});
}

function getRequests(callback) {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/api/request",
	    type: "GET",
	    contentType: 'application/json; charset=utf-8',
	    success: function(resultData) {
	        //here is your json.
	          // process it
	          console.log(resultData);
	          callback(resultData);
	    },
	    error : function(jqXHR, textStatus, errorThrown) {
	    },

	    timeout: 120000,
	});
}

/**
	Yet to be tested
*/
function getRequestsForUser(phonenumber) {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/api/request/" + phonenumber,
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
