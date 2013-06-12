define(function () {
    return  {
		getLastAdded: function(callbackDone, callbackError) {
			$.mobile.showPageLoadingMsg();
			$.ajax({
			  url: "http://paemfa.com.ar/service/lastAdded.php",
			  async: true,
			}).done(function(data) {
			  	callbackDone($.parseJSON(data.replace(/\n/gm,"")));
			  	$.mobile.hidePageLoadingMsg();
			}).fail(function(error){
				callbackError({"error":"ajax error"});
				$.mobile.hidePageLoadingMsg();
			});
		}
	};
});