var http = require('http');
var url = require('url');

var port = Number(process.argv[2]) || 8000;

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var time;
        var urlParsed = url.parse(req.url, true);
        var date = new Date(urlParsed.query.iso);
        if (urlParsed.pathname === '/api/parsetime') {
            time = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        } else if (urlParsed.pathname === '/api/unixtime') {
            time = {
                unixtime: date.getTime()
            };
        }
        if (time) {
         res.writeHead(200, {
             'Content-Type': 'application/json'
         })
         res.end(JSON.stringify(time));
        }
        else {
        	res.writeHead(404);
        	res.end;
        }
    }
}).listen(port);
