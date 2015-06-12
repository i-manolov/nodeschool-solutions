// function add(x, y) {
//   console.log(x + y);
// }

// function partiallyApply(fn,val) {
// 	return fn.apply(this, [val, 10]);
// }

// partiallyApply(add,20);

function logger(namespace) {
  return function() {
  	var argArray = Array.prototype.slice.call(arguments);
	console.log.apply(null, [namespace].concat(argArray));
	}
}


// var logger = logger("INFO: ");
// logger('some new string');

module.exports = logger;
