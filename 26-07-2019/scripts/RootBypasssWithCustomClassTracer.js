function getStackTrace(th){
  return th.currentThread().getStackTrace().slice(2,30).reverse().toString().replace(/,/g,"\r\n");
}


function traceAndHookAllClassMethods(className){
  var targetClass = Java.use(className);
  var Thread = Java.use("java.lang.Thread");
  
  var methods = targetClass.class.getDeclaredMethods();
  methods.forEach(function(method_name){
      var raw_data = String(method_name).replace(className,"");
      var re = /^.*?\.(.*?)\(.*/;
      var method_name = re.exec(raw_data)[1]
      try{
          var overloads = eval("targetClass."+method_name+".overloads");
          var n_overloads = overloads.length;
          if (n_overloads > 1){
            for (var i=0; i<n_overloads; i++){
              var method_overload = eval("targetClass."+method_name+".overloads["+i+"]");
              method_overload.implementation = function(args){
                console.log("-------------------------------");
                console.log(getStackTrace(Thread));
                //return method_overload.apply(this,arguments);
                return false;
              }
            }
          }else{
              var method_overload = eval("targetClass."+method_name+".overloads[0]");
              method_overload.implementation = function(args){
                console.log("-------------------------------")
                console.log(getStackTrace(Thread));
                //return method_overload.apply(this,arguments);
                return false;
              } 
          }

      }catch(err){

      }

  });  
}



Java.perform(function(){
  var className = "sg.vantagepoint.a.c";
  traceAndHookAllClassMethods(className);

});
