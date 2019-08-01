import frida 
# frida python Api documentation is at
# https://github.com/frida/frida-python/blob/master/frida/__init__.py

rpc_hello = """
rpc.exports = {
	helloWorld: function (){
		return "Hello World";
	},
};
"""

device = frida.get_usb_device(timeout=1);
pid = device.spawn("owasp.mstg.uncrackable1")
session = device.attach(pid)
script = session.create_script(rpc_hello)
script.load()
api = script.exports
print(api.hello_world());
