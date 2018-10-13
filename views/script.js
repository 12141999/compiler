// var express = require("express");
// var app = express();
// var path = require("path");

var run = document.getElementById("run-button");
//var outputText = document.getElementById('output-text');
var editor = document.getElementById("editor");

run.addEventListener("click" , function(event){
  var pcode  = editor.getValue();
  console.log(pcode);      
});

module.exports = pcode;


// run.addEventListener('click', function(event) {
//     var code = editor.getValue();
//     var bodyData = {
//         language: "java",
//         code: code
//     };
//     fetch('/compile', {
//         method: "post",
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             language: "java",
//             code
//         })
//     })
//     .then(result => result.json())
//     .then(result => {
//         if (result.response === "success") {
//             outputText.innerHTML = result.data.stdout;
//         } else {
//             outputText.innerHTML = result.data.stderr;
//         }
//     })
//     .catch(err => {
//         console.log(err);
//     });
// });