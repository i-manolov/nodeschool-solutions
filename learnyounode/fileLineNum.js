'use strict'

var fs = require ('fs');

// Sync implementation
// // readFileSync returns a buffer
// var fileContents = fs.readFileSync(process.argv[2]).toString() || fs.readFileSync('./textFile.txt').toString();

// var strArray = fileContents.split('\n');
// console.log(strArray.length - 1); 


// Async implementation
var fileContents;
fs.readFile(process.argv[2] || './textFile.txt', 'utf8', function (err, content) {
	if (err) {
		return err;
	}
	fileContents = content.split('\n');
	console.log(fileContents.length - 1);
});

