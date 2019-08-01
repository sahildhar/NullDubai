Java.perform(function(){
	Java.enumerateLoadedClasses({
		onMatch: function(className){
			try{
				var _class = Java.use(className);
				if(className.includes("rootinspector")){
					var methods = _class.class.getDeclaredMethods();
					methods.map(function(methodName){
						if(methodName.toString().includes("native")){
							console.log(methodName);
						}
					});
				}
			}
			catch(err){}
		},
		onComplete:function(){}
	});
});
