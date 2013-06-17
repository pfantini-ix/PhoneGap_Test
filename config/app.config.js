//config show event
var pagebeforeshow_modules = [];
$($.find('[data-role=page]')).each(function(a,b){
	pagebeforeshow_modules.push('events/pagebeforeshow/'+$(b).attr('id'));
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