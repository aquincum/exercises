var flattenThunk = function (thunk){
	return function (callback){
		thunk(function(err, result){
			if(err){
				callback(err, null);
			}
			else {
				if (typeof result === "function"){ // another thunk
					flattenThunk(result)(function(err2, result2){
						callback(err2, result2);
					});
				}
				else {
					callback(err, result);
				}
			}
		});
	}
};

module.exports = flattenThunk;


