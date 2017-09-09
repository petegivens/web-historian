var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var cwd = process.cwd();

// require more modules/folders here!

var headers = {
  'access-control-allow-origin' : '*',
  'access-control-allow-methods' : 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers' : 'content-type, accept',
  'access-control-max-age' : 10,
};

exports.handleRequest = function (req, res) {

  if (req.method === 'GET' && req.url === '/') {
    var statusCode = 200;
    fs.readFile(archive.paths.index, (err, data) => {
      if (err) {
        throw err;
      }
      headers['Content-Type'] = 'text/html';
      res.writeHead(statusCode, headers);
      res.end(data);
    });
  }
  // res.end(archive.paths.list);
  // console.log('random stuff: ', archive.paths.list)
};
