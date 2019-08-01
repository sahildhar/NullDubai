Java.perform(function(){
	var _class = Java.use("com.scottyab.rootbeer.RootBeer")
	_class.isRooted.implementation = function(){
		console.log("isRooted Hooked");
		return false;
	}

	_class.isRootedWithoutBusyBoxCheck.implementation = function(){
		console.log("isRootedWithoutBusyBoxCheck Hooked");
		return false;
	}	
});


