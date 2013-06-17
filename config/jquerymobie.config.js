//Config jquery mobile
$(document).bind( "mobileinit", function() {
	console.log("jquery mobile configuration");
	$.mobile.allowCrossDomainPages = true;
	$.mobile.defaultPageTransition = 'slide';
});