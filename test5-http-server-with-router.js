/*jslint node: true*/
'use strict';

/* -------------------
/ ROUTER FUNCTION
/------------------ */

var router = {};

router.getURL = function(request){
    return request.url;
};

router.getContent = function(request){
    var url = router.getURL(request);
    var page;
    
    switch(url){
        case '/':
            page = 'home';
            break;
        case '/about':
            page = 'about';
            break;
        case '/blog':
            page = 'blog';
            break;
        default:
            page = 'error-404';
    }
    
    return contentLoader.getContent(page);
};

/* -------------------
/ CONTENT LOADER
/------------------ */

var contentLoader = {};

contentLoader.getContent = function(page){
    
    var pageContent;
    
    switch(page){
        case 'home':
            pageContent = content.home;
            break;
        case 'about':
            pageContent = content.aboutMe;
            break;
        case 'blog':
            pageContent = content.blog;
            break;
        case 'error-404':
            pageContent = content.error404;
            break;
        default:
            pageContent = 'undefined error happened';
    }
    
    return pageContent;
};

/* -------------------
/ CONTENTS
/------------------ */

var content = {};

content.home        = 'this is my home page';
content.aboutMe     = 'this page tells about me';
content.blog        = 'this page contains blog entries'; 
content.error404    = 'ERROR 404, page not found by our friendly router';

/* -------------------
/ NODE SERVER
/------------------ */

var http = require('http');

var hostname = '127.0.0.1';
var port = 1337;

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    response.write('You are at: ' + router.getURL(request) + '\n' + '\n');
    
    response.write('CONTENT: ' + '\n' + router.getContent(request) + '\n');
    
    response.end('\n' + 'TEXT END');    
  
    
}).listen(port, hostname, function () {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});