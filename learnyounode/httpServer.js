var http = require ('http');
var fs = require ('fs');

var port = Number(process.argv[2]) || 8000;
var filePath = process.argv[3] || './textFile.txt';

var server = http.createServer (function (req, res) {
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(res);
}).listen(port);