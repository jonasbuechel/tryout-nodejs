/*jslint node: true*/
'use strict';

var myTestFunction = function(){
    //throw an error to simulate "bad thing happened"
    throw new Error("oops, some error is happened");
};


try{
    myTestFunction();
    console.log('all ok');
}catch(error){
    console.error(error.message);
}
