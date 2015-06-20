var curry = function(f){
  return function (x) {
    return function () {
      newargs = Array.prototype.slice.call(arguments);
      newargs.unshift(x);
      if(newargs.length === f.length){
        return f.apply(null, newargs);
      }
      else {
        return curry(function
      }
    }
  } 
}

module.exports = curry;
