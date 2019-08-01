Java.performNow(function(){
	// var classes = Java.enumerateLoadedClassesSync()
	// classes.forEach(function(className){
		//console.log(className);
	// });

	var classes = Java.enumerateLoadedClasses({
		onMatch: function(className){
			console.log(className);
		},
		onComplete: function(){
			console.log("All classes loaded");
		}
	});
});
