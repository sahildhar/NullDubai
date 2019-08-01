Java.perform(function(){
	var checkfopen = Module.findExportByName(
		"libnative2.so",
		"Java_com_devadvance_rootinspector_Root_checkfopen"
		);
		console.log("checkfopen is at: "+checkfopen)
		Interceptor.attach(checkfopen,{
			onEnter: function(args){
				
				//casting jstring object to String
				console.log(
						Java.cast(
							ptr(args[2]),
							Java.use("java.lang.String")
							)
						);
				console.log("Hooked checkfopen");
			},
			onLeave: function(retval){
				// returning false for the check
				retval.replace(0);
			}
		});

	// var _jRoot = Java.use("com.devadvance.rootinspector.Root");
	// _jRoot.checkfopen.implementation = function(args){
	// 	console.log("Hooked checkfopen: " +args);
	// 	return false
	// };
	// _jRoot.checkifstream.implementation = function(args){
	// 	console.log("Hooked checkifstream: " +args);
	// 	return false
	// };

 //    _jRoot.runls.implementation = function(str, str2, z){
	// 	console.log("Hooked runls: " +str + "," + str2);
	// 	return false
 //    };

 //    _jRoot.runpmlist.implementation = function(str, z){
	// 	console.log("Hooked runpmlist: " +str);
	// 	return false	
 //    };


 //    _jRoot.runsu.implementation = function(str){
	// 	console.log("Hooked runpmlist: " +str);
	// 	return false	
 //    };

 //    _jRoot.statfile.implementation = function(str){
	// 	console.log("Hooked runpmlist: " +str);
	// 	return false	
	// };
});


