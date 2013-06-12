define(function () {
	return {
		addEvent : function(){
			$('#home').unbind()
			$("#home").on( "pagebeforeshow", function( event ) { 
				console.log("evento: pagina home show");
			});
		}
	}
});