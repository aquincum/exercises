module.exports = function (f) {
	var table = {};
	return function (){
		var key = JSON.stringify(arguments);
		if (key === undefined){
			return f.apply(null, arguments);
		}
		
		if (table[key] === undefined){
			table[key] = f.apply(null,arguments);
		}
		return table[key];
	}
}
