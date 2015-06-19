// var nums = [1,2,3,4,5]

// // `map` is your exported function
// var output = map(nums, function double(item) {
//   return item * 2
// })

// console.log(output) // => [2,4,6,8,10]


function map (arr, fn)
{
	return arr.reduce(function (outputArr, curr) {
		outputArr.push(fn(curr));
		return outputArr;
	}, []);
}   


 module.exports = arrayMap;