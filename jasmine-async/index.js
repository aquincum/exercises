var jasmineAsync = function (f) {
	var settings = f();
	var donehere = false;
	var waitfn = function(){
		return donehere;
	}
				
	it(settings.desc, function(done){
		runs(function(){
			settings.setup(function(){
				donehere = true;
			});
		});
		waitsFor(waitfn);
		runs(function(){settings.test();});
		//done();
	});
	

}


module.exports = jasmineAsync;
