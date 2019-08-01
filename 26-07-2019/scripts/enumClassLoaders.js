Java.perform(function(){
	var classes = Java.enumerateClassLoadersSync()
	classes.forEach(function(loader){
		console.log(loader);
	});

});
