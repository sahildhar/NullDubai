Java.perform(function(){
	var _rootClass = Java.use("com.devadvance.rootinspector.Root");
	var checkRootMethod0 = 	_rootClass.checkRootMethod0.implementation = function()
	{	
		console.log("Hooked checkRootMethod0");
		return false;

	}
});
