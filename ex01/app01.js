// var http = require('http');
// http.createServer(function (request, response) 
// {

//     response.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });

//     response.end('Hello World\n');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');

// console.log(__filename);
// console.log(__dirname);

// function helloWorld() {
//     console.log("Hello World")
// }

// var t = setTimeout(helloWorld, 3000);
// // clearTimeout(t);

// var i = 0;
// var t = setInterval(counter, 2000);

// function counter() {
//     i++;
//     console.log(i);
// }
// setTimeout(function () {
//     clearInterval(t);
// }, 10000);

// var circle = require('./circle.js');

// console.log(circle.show);
// console.log(circle.add(50,30));

// var util = require('util');
// var fs = require('fs');

// function readFile(str, callback){
//     var lines =[];
//     fs.readFile(str, function (err, data) {
//         if (err) throw err; 
//         lines.push(data); 
//         console.log(data.toString());
//     });
//    callback(lines);
// }

// var a, b;
// readFile('./20.txt', function(data){
//     a= data;
// }); 

// readFile('./10.txt',function(data){
//     b= data;
// }); 
// util.log("a -- "+a);
// util.log("b -- " +b);

var assert = require('assert');

function add(a, b) {
    return a + b;
}
var expected = add(1, 2);
assert(expected === 4, 'one plus two is three');