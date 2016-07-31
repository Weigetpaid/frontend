/* 
	http://131940.qld.gov.au/api/json/v1/ 
	Road closures
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