/*jslint node: true*/
'use strict';

var http = require("https");

var trelloApplicationKey    = ''; //add application key
var trelloAPIToken          = ''; //add api token
var trelloBoardId           = ''; //add boardid
var trelloURL               = 'https://api.trello.com/1/boards/'+trelloBoardId+'/cards?fields=name,idList,url&key='+trelloApplicationKey+'&token='+trelloAPIToken;

var request = http.get(trelloURL, function(response){
    
    //console.log('STATUS:'+response.statusCode);
    //console.log('HEADERS:'+JSON.stringify(response.headers));
    response.setEncoding('utf8');
    
    var responseString = '';
    
    response.on('data', function(chunk){
        responseString += chunk;
    });

    response.on('end', function(){
        console.dir(JSON.parse(responseString));
    });
    
});

request.on('error', function(error){
   console.error('ERROR: ' + error.message); 
});