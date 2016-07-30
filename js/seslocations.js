function seslocations_getdata() {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/datasets/QldSESGroupLocations.json",
	    success: function (data) {
	        var obj = JSON.parse(data);
	        console.log(obj);
	    }
	});
}

seslocations_getdata();