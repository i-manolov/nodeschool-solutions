'use strict'

var filterDir = require ('./filterDirByType_module');

var filePath = process.argv[2] || '.';
var fileType = process.argv[3] || '.js';

function main () {
	filterDir(filePath, fileType, function (err, list) {
		if (err) {
			console.log(err);
		}
		list.forEach(function (s) {
			console.log(s);
		});
	});
}

main();