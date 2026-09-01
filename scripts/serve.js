'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var root = path.resolve(__dirname, '..', 'dist');
var port = Number(process.env.PORT || 4173);
var mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function safeFilePath(requestPath) {
  var decoded = decodeURIComponent(requestPath);
  var relative = decoded.replace(/^\/+/, '');
  var candidate = path.resolve(root, relative);
  if (candidate.indexOf(root) !== 0) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) candidate = path.join(candidate, 'index.html');
  return candidate;
}

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url);
  var filePath = safeFilePath(parsed.pathname);
  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = path.join(root, '404.html');
    response.statusCode = 404;
  }
  response.setHeader('Content-Type', mimeTypes[path.extname(filePath)] || 'application/octet-stream');
  response.setHeader('Cache-Control', 'no-store');
  fs.createReadStream(filePath).pipe(response);
});

server.listen(port, '127.0.0.1', function () {
  console.log('Preview available at http://127.0.0.1:' + port + '/zh/');
});
