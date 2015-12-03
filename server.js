var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log(url.parse(request.url).query);
		var postData = "";
		console.log("Request for " + pathName + " received.");
		
		request.setEncoding("utf8");
		
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk " + postDataChunk + ".");
		});
		
		request.addListener("end", function() {
			
			if(postData == "")
				postData = url.parse(request.url).query;
			
			route(handle, pathName, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server started on port 8888");
}

exports.start = start;