// var spy = Spy(console, 'error')

// console.error('calling console.error')
// console.error('calling console.error')
// console.error('calling console.error')

// console.log(spy)

function Spy(target, method) {
	var result = {
		count: 0
	}
	var counter = counter || 0;

	var oldMethod = target[method];

	target[method] = function () {
		result.count ++;
		console.log(counter);
		return oldMethod.apply (target, arguments);
	}

	return result;
	//return counter;

}


module.exports = Spy
