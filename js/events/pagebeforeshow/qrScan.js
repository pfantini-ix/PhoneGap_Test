define(["qrScan"], function (qrscan) {
	return {
		addEvent : function(){
			$('#qrScan').unbind()
	    	$("#qrScan").on( "pagebeforeshow", function( event ) { 
				qrscan.scan();
			});
		}
	}
});