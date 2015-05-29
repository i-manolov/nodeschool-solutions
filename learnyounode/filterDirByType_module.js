'use strict'

var fs = require('fs');
var path = require('path');

module.exports = function filterDir(filePath, fileType, callback) {
    fs.readdir(filePath, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            var filteredArray = list.filter(function(curr) {
                return path.extname(curr) === '.'+ fileType;
            });
            callback(null, filteredArray);
        }
    });
}
