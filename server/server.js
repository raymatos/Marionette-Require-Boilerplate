// DEPENDENCIES
// ============
var express = require("express"),
    http = require("http"),
    port = (process.env.PORT || 8001),
    fs = require("fs"),
    server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function () {
    
    server.use("/css", express["static"](__dirname + "/../public/css"));
	server.use("/img", express["static"](__dirname + "/../public/img"));
	server.use("/js", express["static"](__dirname + "/../public/js"));
	
	server.get("*", function(req, res) {
	  	fs.createReadStream(__dirname + "/../public/index.html").pipe(res);
	});
    
    server.use(express.errorHandler({

        dumpExceptions:true,

        showStack:true

    }));

    server.use(server.router);
});

// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);

console.log('Welcome to Backbone-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Backbone.js');