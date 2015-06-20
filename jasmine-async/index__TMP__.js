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
  var assert = require('assert');
  var thingsToDo = [];
  var runs = function(runFn) {
    thingsToDo.push({type: 'run', todo: runFn});
  };
  var waitsFor = function(waitsForFn) {
    thingsToDo.push({type: 'waitsFor', todo: waitsForFn});
  };
  var it = function(desc, fn) {
    fn();
    assert.equal(thingsToDo[0].type, 'run');
    assert.equal(thingsToDo[1].type, 'waitsFor');
    assert.equal(thingsToDo[2].type, 'run');
    thingsToDo[0].todo();
    next();
    function next() {
      if (thingsToDo[1].todo()) {
        thingsToDo[2].todo();
      } else {
        setTimeout(next, 1);
      }
    }
  };
