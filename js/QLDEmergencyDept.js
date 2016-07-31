/* http://131940.qld.gov.au/api/json/v1/ */

function getdata_131940(callback) {
	$.ajax({
	    url: "https://data.qld.gov.au/api/action/datastore_search?resource_id=8b1babf2-3d62-441d-b21d-0da7c049bba3&limit=1000",
	    type: "GET",
	    contentType: 'application/json; charset=utf-8',
	    success: function(resultData) {
	          console.log(resultData);
	          callback(resultData);
	    },
	    error : function(jqXHR, textStatus, errorThrown) {
	    	console.log(errorThrown);
	    },
	
	    timeout: 120000,
	});
}

getdata_131940(function(result) {
	
});