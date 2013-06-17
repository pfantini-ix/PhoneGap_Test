require(["events"], function(events) {
	
	var app = {
	    // Application Constructor
	    initialize: function() {
	        this.bindEvents();
	        
	        //Config button external
	        $("#expernalURL").click(function(){
	        	console.log("hola");
	        	$.mobile.showPageLoadingMsg();
	        	var ref = window.open('http://192.168.1.103:9090', '_blank', 'location=no');
	        	//var ref = window.open('http://www.paemfa.com.ar', '_self', 'location=no,toolbar=no,enableViewportScale=no');
	        	ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
		        ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
		        ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
		        ref.addEventListener('exit', function(event) { alert(event.type); });
	        });
	    },
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	    bindEvents: function() {
	        document.addEventListener('deviceready', this.onDeviceReady, false);
	        document.addEventListener("pause", this.onPause, false);
			document.addEventListener("resume", this.onResume, false);
			document.addEventListener("backbutton", this.onBackButton, false);
			document.addEventListener("menubutton", this.onMenuButton, false);
			document.addEventListener("searchbutton", this.onSearchButton, false);			
	    },
	    
	    onBackButton: function(){
	    	var back = $.mobile.activePage.prev('[data-role=page]');
			$.mobile.changePage(back, { 
			    transition: 'slide',
			    reverse: true 
			});	    	
	    },
	    
	    onSearchButton: function(){
	    	alert("search");
	    },
	    
	    onMenuButton: function(){
	    	alert("menu");
	    },
	    
	    onPause: function(){
	    	alert("pause");
	    },
	    
	    onResume: function(){
	    	alert("resume");
	    },
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicity call 'app.receivedEvent(...);'
	    onDeviceReady: function() {
	        app.receivedEvent('deviceready');
	    },
	    // Update DOM on a Received Event
	    receivedEvent: function(id) {
	        var parentElement = document.getElementById(id);
	        var listeningElement = parentElement.querySelector('.listening');
	        var receivedElement = parentElement.querySelector('.received');
	
	        listeningElement.setAttribute('style', 'display:none;');
	        receivedElement.setAttribute('style', 'display:block;');
	
	        console.log('Received Event: ' + id);
	    },
	};
	
	app.initialize();
});