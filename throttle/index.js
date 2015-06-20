var throttle = function (f, timeout){
	var invoked = false, swallowed = false, args = [];

	return function (){
		var context = this;
		args = Array.prototype.slice.call(arguments);
		if(!invoked){
			invoked = true;
			setTimeout(function(){ 
				invoked = false; 
				if (swallowed){
					swallowed = false;
					setTimeout(function(){
						if(!invoked)
							f.apply(context, args);
					}, 1);
				}
			}, timeout);
			f.apply(context, args);
		}
		else {
			swallowed = true;
		}
	}

};


module.exports = throttle;
