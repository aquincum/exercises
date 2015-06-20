function filter(arr, pred){
	//var arr = a.slice(); // copy
	if(arr.length === 0) return [];
	var head = arr.shift();
	var rest = arr;//.slice(1, arr.length);
	if(pred(head)) return [head].concat(filter(rest,pred));
	else return filter(rest,pred);
}

var sort = function (arr) { // sort
	if(arr.length === 0) return [];
	var pivot = arr.shift();
	var argr = arr.slice();
	var smaller = sort(filter(arr, function(elem) { return elem <= pivot; }));
	var greater = sort(filter(argr, function(elem) { return elem > pivot; }));
	return smaller.concat([pivot], greater);	
}

module.exports = sort;
module.exports.filter = filter;
