var value = function(vf){
	if (typeof vf === "function"){
		return value(vf());
	}
	else return vf;
}


module.exports = value;
