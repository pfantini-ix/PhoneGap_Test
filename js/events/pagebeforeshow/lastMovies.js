define(["service/lastAdded"], function (lastAddedService) {
	return {
		addEvent : function(){
			$('#lastMovies').unbind()
			$("#lastMovies").on( "pagebeforeshow", function( event ) { 
				console.log("evento: pagina lastMovies show");
				
				//call service
		        lastAddedService.getLastAdded(function(data){
		        	var page = $("#lastMovies-content");
		        	page.append('<ul data-role="listview">');
		        	
		        	$(data).each(function(a,b){
		        		console.log(b.title);
		        		page.append('<li><a href="#">'+b.title+'</a></li>');
		        	});
		        	page.append('</ul>');
		        }, function(error){
		        	console.log(error);
		        });
			});
		}
	}
});