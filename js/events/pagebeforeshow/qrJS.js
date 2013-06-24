define(["qrScan"], function (qrscan) {
	
	return {
		addEvent : function(){
			$('#qrJS').unbind()
	    	$("#qrJS").on( "pagebeforeshow", function( event ) { 
				
				 var callback = function(code){alert('the code was: ' + code);} 
				 qrcode.callback = callback;
				
				$('#btnQrJs').click(function(){	
					
					navigator.camera.getPicture(
						function(imageData) {
						    var image = document.getElementById('myImage');
    						image.src = "data:image/jpeg;base64," + imageData;
    						qrcode.decode(imageData);
    						
						}, function(message) {
						    alert("error camera");
						    
						},
						{ quality: 90 });
				});
			});
		},
	}
});