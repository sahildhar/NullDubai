Java.performNow(function(){
	
	var _alertDialog = Java.use("android.app.AlertDialog");
	_alertDialog.setMessage.overload("java.lang.CharSequence").implementation = function(message){
		console.error(message.toString());
		return _alertDialog.setMessage.overload("java.lang.CharSequence").apply(this,arguments);
	}


})
