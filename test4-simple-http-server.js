/*jslint node: true*/
'use strict';

var http = require('http');

var hostname = '127.0.0.1';
var port = 1337;

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  
//TEST 1: write out and end
response.write('MY OWN RESPONSE TEXT!' + '\n');
response.end('TEXT END');
    
//TEST 2: removen end    
  //setInterval(function(){
//     response.write(new Date() + "\n"); 
  //}, 500);
     
  
    
}).listen(port, hostname, function () {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});