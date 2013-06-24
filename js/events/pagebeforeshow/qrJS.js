define(["qrScan"], function (qrscan) {
	
	return {
		addEvent : function(){
			$('#qrJS').unbind()
	    	$("#qrJS").on( "pagebeforeshow", function( event ) { 
	    		
				console.log("load qr");
				
				 var callback = function(code){alert('the code was: ' + code);} 
				 QRIfy('codeimg', callback);//will be connected on DOMContentLoaded
				
				$('#btnQrJs').click(function(){	
					
					navigator.camera.getPicture( 
						function(imageData) {
						    var image = document.getElementById('myImage');
    						image.src = "data:image/jpeg;base64," + imageData;
						}, function(message) {
						    alert("error camera")
						});
				});
			});
		},
	}
});