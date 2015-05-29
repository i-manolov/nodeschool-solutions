function doubleAll(numbers) {
  var doubleArray = numbers.map(function (item) {
  	return item * 2;
  })
  return doubleArray;
}

module.exports = doubleAll;
