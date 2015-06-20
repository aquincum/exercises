var once = function (f) {
	var called = false, result = undefined;

	return function () {
		if (called) return result;
		result = f.apply(this, arguments);
		called = true;
		return result;
	}
};

module.exports = once;
