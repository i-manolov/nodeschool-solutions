// calculate the total of argv

function main () {
	var intArray = convertArgsToArray (process.argv);
	console.log(getTotal(intArray));
}

function convertArgsToArray (argsArray) {
	// get the args from index 2 to last 
	// to avoid 'node' and path var at ind 0 and 1
	var argsArraySliced = argsArray.slice(2);

	// map to int array instead of strings
	var intArray = argsArraySliced.map(function (val) {
		return Number(val);
	});
	return intArray;
}

function getTotal (arrayInput) {
	var total = arrayInput.reduce(function (prev, curr) {
		return prev + curr;	
	});
	return total;
}

main ();