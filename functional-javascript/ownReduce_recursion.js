reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr;
}, 0);
// // => 6

// fn (prev, cur, index, array)

function reduce(arr, fn, initial) {
	var previous, current;

	if (!arr.length) {
		console.log(initial);
		return initial;
	}
	else {
		current = arr[0];
		initial = fn (initial, current, 0, arr);
		return reduce(arr.slice(1), fn, initial);
	}	
}

module.exports = reduce ;
