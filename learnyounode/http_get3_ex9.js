'use strict'

var http = require('http');

var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


var resultArray= [];
processGet(url, function (err, body) {
	if (err) {
		return err;
	}
	console.log(body);
	processGet(url2, function (err, body2) {
		if (err) {
			return err;
		}
		console.log(body2);
		processGet(url3, function (err, body3) {
			if (err) {
				return err;
			}
			console.log(body3);
		});
	});
});


function processGet(url, callback) {
    http.get(url, function(res) {
        res.setEncoding('utf8');
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            callback(null, body);
        });
        res.on('error', function(err) {
            return callback(err);
        });
    });
}

