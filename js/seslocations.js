function seslocations_getdata(callback) {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/datasets/QldSESGroupLocations.json",
	    success: function (data) {
	        console.log(data);
	        callback(data);
	    }
	});
}