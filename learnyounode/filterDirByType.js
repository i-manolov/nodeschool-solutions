'use strict'

var fs = require ('fs');
var path = require ('path');

var filePath = process.argv[2] || '.';
var fileType = '.' + process.argv[3] || '.js';

fs.readdir (filePath, function (err, list) {
	var filteredArray = list.filter(function (curr) {
		return path.extname(curr) === fileType;
	});
	filteredArray.forEach(function (s) {
		console.log(s);
	});
});