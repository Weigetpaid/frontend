function seslocations_getdata() {
	$.ajax({
	    url: "http://weigetpaid.timhadwen.com/datasets/QldSESGroupLocations.json",
	    success: function (data) {
	        console.log(data);
	    }
	});
}

seslocations_getdata();