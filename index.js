var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
const { python , c , cpp , java , node } = require("compile-run");
// var code = require("./views/script");
//var compile_run = require('compile-run');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Freastal_technologies", function(err , db)
  {
    if(err)
    {
      console.log(err);
    }
    else{
          console.log("database has been connected!");
    }
  });

// app.use(flash());
app.use(require("express-session")({
    secret: "books page",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('', express.static(path.join(__dirname + '')));
app.use(express.static(path.join(__dirname , "ace-builds")));
app.use(express.static(path.join(__dirname , "views")));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine" , "ejs");


app.post("/python",function(req,res){
	console.log("python");
	var sourcecode = req.body.code;
    var input = req.body.input;
	console.log(input);
	var match = /\r|\n/.exec(input);
	if (match) {
		input = input;
	}
	else
	{
		input = " '" + input + "' ";
	}
    let resultPromise = python.runSource(sourcecode , { stdin : input});
	resultPromise
	    .then(result => {
	       	console.log("success");
	        console.log(result);
	        console.log(result.stdout);
	        res.send({out : result.stdout , error : result.stderr});
	    })
	    .catch(err => {
	        console.log(err);
	    });
});	

app.post("/cpp",function(req,res){
	console.log("cpp");
	var sourcecode = req.body.code;
	 var input = req.body.input;
	console.log(input);
	var match = /\r|\n/.exec(input);
	if (match) {
		input = input;
	}
	else
	{
		input = " '" + input + "' ";
	}
    let resultPromise = cpp.runSource(sourcecode , { stdin : input});
	resultPromise
	    .then(result => {
	       	console.log("success");
	        console.log(result);
	        console.log(result.stdout);
	        res.send({out : result.stdout , error : result.stderr});
	    })
	    .catch(err => {
	        console.log(err);
	    });
});	

app.post("/c",function(req,res){
	console.log("c");
	var sourcecode = req.body.code;
	 var input = req.body.input;
	console.log(input);
	var match = /\r|\n/.exec(input);
	if (match) {
		input = input;
	}
	else
	{
		input = " '" + input + "' ";
	}
    let resultPromise = c.runSource(sourcecode , { stdin : input});
	resultPromise
	    .then(result => {
	       	console.log("success");
	        console.log(result);
	        console.log(result.stdout);
	        res.send({out : result.stdout , error : result.stderr});
	    })
	    .catch(err => {
	        console.log(err);
	    });
});	

app.post("/java",function(req,res){
	console.log("java");
	var sourcecode = req.body.code;
	 var input = req.body.input;
	console.log(input);
	var match = /\r|\n/.exec(input);
	if (match) {
		input = input;
	}
	else
	{
		input = " '" + input + "' ";
	}
    let resultPromise = java.runSource(sourcecode , { stdin : input});
	resultPromise
	    .then(result => {
	       	console.log("success");
	        console.log(result);
	        console.log(result.stdout);
	        res.send({out : result.stdout , error : result.stderr});
	    })
	    .catch(err => {
	        console.log(err);
	    });
});	

app.post("/node",function(req,res){
	console.log("node");
	var sourcecode = req.body.code;
	 var input = req.body.input;
	console.log(input);
	var match = /\r|\n/.exec(input);
	if (match) {
		input = input;
	}
	else
	{
		input = " '" + input + "' ";
	}
    let resultPromise = node.runSource(sourcecode , { stdin : input});
	resultPromise
	    .then(result => {
	       	console.log("success");
	        console.log(result);
	        console.log(result.stdout);
	        res.send({out : result.stdout , error : result.stderr});
	    })
	    .catch(err => {
	        console.log(err);
	    });
});	

app.get("/home" , function(req,res){
  res.render("home");
});

app.get("/",function(req,res){
  res.render("python");
});

app.listen("3077" , function(req,res){
  console.log("server is started");
});