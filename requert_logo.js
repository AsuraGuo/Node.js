var http = require("http");
var fs = require("fs");
 http
 	.createServer(function (req,res) {
 		// fs.readFile("./buffer/js.jpg", function(err,data){
 		// 	if (err){
 		// 		res.end("file not exist!");
 		// 	}else{
 		// 		res.writeHeader(200,{'Context-Type':'text/html'});
 		// 		res.end(data);
 		// 	}
 		// })
 		fs.createReadStream("./buffer/js.jpg").pipe(res);
 	})
 	.listen(8090);