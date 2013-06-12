require(pagebeforeshow_modules, function() {
	$(arguments).each(function(a,b){
		if(b != null)
			b.addEvent();
	});
});