Java.perform(function () {
	var mainactivity = Java.use("com.pragyan.circle.a");
	mainactivity.$init.overloads[0].implementation = function(a,b,c,d,e) {
		console.log(d);
		return mainactivity.$init.overloads[0].apply(this,arguments);
	};

	send("Hooks installed.");
});	