module.exports = function (f, timeout) {
	var currtimer = null;
	return function () {
		var args = Array.prototype.slice.call(arguments),
   		    context = this;
		var frun = function (){
			f.apply(context, args);
			currtimer = null;
		}
		if ( currtimer !== null ) {
			clearTimeout(currtimer);
		}
		currtimer = setTimeout(frun, timeout);
	}
};
