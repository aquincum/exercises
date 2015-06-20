var Middleware = function(){
	var hooks = []
	function runHook(i, finish){
		hooks[i].call(this,function (){
			if(i + 1 < hooks.length){
				runHook(i+1, finish);
			}
			else {
				finish();
			}
		});
	}
	this.use = function (f){
		hooks.push(f);
	};
	this.go = function (f){
		runHook(0, f);
	};
	return this;
};



module.exports = Middleware;
