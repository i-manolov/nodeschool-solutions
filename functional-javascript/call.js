'use strict'

// var test = 
// 	{ 
// 	  '0': { quack: true },
// 	  '1': { quack: true, hasOwnProperty: [Function] },
// 	  '2': {},
// 	  '3': {},
// 	  '4': { quack: true, hasOwnProperty: [Function] },
// 	  '5': {},
// 	  '6': {},
// 	  '7': { quack: false } 
// 	};

// var test2 = [
// 	{ quack: true }, { quack: true, hasOwnProperty: [Function] }, {}, {}, { quack: true, hasOwnProperty: [Function] }, {}, {}, {quack: false}
// ]; 

// duckCount(test2);


function duckCount() {

  var array = Array.prototype.filter.call(arguments, function (item) {
  	return  Object.prototype.hasOwnProperty.call(item, 'quack');
  });
  return array.length;
}

module.exports = duckCount;





