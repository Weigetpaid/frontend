/* http://131940.qld.gov.au/api/json/v1/ */

function getdata_131940() {
	$.ajax({
	    url: "http://131940.qld.gov.au/api/json/v1/events/limits",
	    type: "GET",
	    contentType: 'application/json; charset=utf-8',
	    success: function(resultData) {
	          console.log(resultData);
	          return resultData;
	    },
	    error : function(jqXHR, textStatus, errorThrown) {
	    	console.log(errorThrown);
	    },
	
	    timeout: 120000,
	});
}

getdata_131940();