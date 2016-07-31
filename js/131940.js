/* 
	http://131940.qld.gov.au/api/json/v1/ 
	Road closures
*/

/*
function getdata_131940(callback) {
	$.ajax({
	    url: "http://131940.qld.gov.au/api/json/v1/events/limits",
	    type: "GET",
	    contentType: 'application/json; charset=utf-8',
	    success: function(resultData) {
	    	callback(resultData);
	    },	
	    timeout: 120000
	});
}
*/

function getdata_131940(callback) {
	console.log("Requested a thing");
	$.ajax({
	    url: "datasets/trafficnew.json",
	    success: function (data) {
			console.log(data);
			callback(data);
	    }
	});
}