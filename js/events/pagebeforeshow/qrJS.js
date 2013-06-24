define(["qrScan"], function (qrscan) {
	
	var gCtx = null;
	var gCanvas = null;
	
	var imageData = null;
	var ii=0;
	var jj=0;
	var c=0;
	
	function initCanvas(ww,hh){
		gCanvas = document.getElementById("qr-canvas");
		var w = ww;
		var h = hh;
		gCanvas.style.width = w + "px";
		gCanvas.style.height = h + "px";
		gCanvas.width = w;
		gCanvas.height = h;
		gCtx = gCanvas.getContext("2d");
		gCtx.clearRect(0, 0, w, h);
		imageData = gCtx.getImageData( 0,0,320,240);
	}
	
	function captureToCanvas() {
		var flash = document.getElementById("embedflash");
		flash.ccCapture();
		qrcode.decode();
	}
	
	return {
		addEvent : function(){
			$('#qrJS').unbind()
	    	$("#qrJS").on( "pagebeforeshow", function( event ) { 
	    		
				console.log("load qr");
				
				initCanvas(640,480);
				qrcode.callback = function(a){
					console.log(a);
				};
				
				$('#btnQrJs').click(function(){	
					console.log("click qr scan");
					captureToCanvas();
				});
			});
		},
	}
});