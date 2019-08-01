Java.performNow(function(){
	console.log(Java.isMainThread());
	Java.scheduleOnMainThread(function(){
		console.log(Java.isMainThread());
	});

});
