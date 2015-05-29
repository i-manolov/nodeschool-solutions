var http = require('http');
var mapSteam = require('through2-map');
var qs = require ('querystring');

var port = process.argv[2] || 8000;

var server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
    	var body = '';
     	req.on('data', function(chunk) {
     		body += chunk;
     	});
     	req.on('end', function () {
     		res.end(body.toUpperCase());
     	});
    }
}).listen(port);
