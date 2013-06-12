//config show event
var pagebeforeshow_modules = [];
$($.find('[data-role=page]')).each(function(a,b){
	pagebeforeshow_modules.push('events/pagebeforeshow/'+$(b).attr('id'));
});

//Config jquery mobile
$(document).bind( "mobileinit", function() {
	// Make your jQuery Mobile framework configuration changes here!
	console.log("jquery mobile configuration")
	$.mobile.allowCrossDomainPages = true;
});

//Config requilejs
requirejs.config({
	//base url
	baseUrl: "js",
	
	//pakages
    packages: ["events"],
    
    //main file
    deps : ['index']
});