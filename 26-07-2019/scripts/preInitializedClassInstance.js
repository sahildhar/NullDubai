Java.perform(function () {
	var _javaString = Java.use("java.lang.String");
	var _hexValue = _javaString.$new("65544231587a52794d3138316458417a636c396d4e44553343673d3d");
	Java.choose("com.pragyan.circle.Main",{
		onMatch: function(instance){
			console.log(_hexValue);
			var flag = instance.a(_hexValue);
			console.log(flag);
		},
		onComplete: function(){}
	});
});	
