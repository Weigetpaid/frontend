/* 
	http://131940.qld.gov.au/api/json/v1/ 
	Road closures
*/

function getdata_131940(callback) {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/datasets/traffic.json",
	    success: function (data) {
	        console.log(data);
	        callback(data);
	    }
	});
}

getdata_131940(function(resultData) {
	
});