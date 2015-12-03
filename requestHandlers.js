var fs = require("fs");
var qs = require('querystring');
var postings= [] ;
var date = new Date();


// Deleted Setting
var showDeletedPosts = true;

fs.readFile("./postings.json", "utf8", function(err, data){
	if(data != null && data.length > 0)
		postings = JSON.parse(data);
});

function bah(response, postData) {
	console.log("Request handler 'index' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});

	if(postData != null){
		var query = qs.parse(postData);
		if(query.deleteEvent){
			if(query.id >= 0 && query.id < postings.length){
				postings[query.id].deleted = true;
			}
		}
		
		if(query.restoreEvent){
			if(query.id >= 0 && query.id < postings.length){
				postings[query.id].deleted = false;
			}
		}
		

		writePostings();
		
	}

	// This is just an idea on how we can do it I guess?
	
	//html for each page is stored in /views/page_name.html
	fs.readFile('./views/bah.html', 'utf8', function(err, data){
		
		//Create array, containing each variable we're replacing in html

		var content = "";//"<h1>Posts</h1>";

		if(postings.length > 0){
			for(var i = postings.length -1; i >= 0; i--){
				var post = postings[i];
				if(post.deleted)
					continue;
				
				content += "<div id=\"temp\">";
					content += "<pre><strong>" + post.name +  "</strong></pre>";
					content += "<p><b>" + post.title + "</b></p>";
					content += "<p>" + post.content + "</p>";
					content += "<p>" + prettyDate(post.date) + "</p>";
					content += "<a href=\"?deleteEvent=true&id=" + i + "\">Delete</a><br><br>\n";	
				content += "</div>";
			}
			
			var showDiv = true;
			if(showDeletedPosts){
				
				for(var i = postings.length -1; i >= 0; i--){
					var post = postings[i];
					
					if(!post.deleted)
						continue;
					
					if(showDiv){
						content += "<div id=\"temp\"><h1>Deleted Posts</h1></div>";
						showDiv = false;
					}
					content += "<div id=\"temp\">";
						content += "<pre><strong>" + post.name +  "</strong></pre>";
						content += "<p><b>" + post.title + "</b></p>";
						content += "<p>" + post.content + "</p>";
						content += "<p>" + prettyDate(post.date) + "</p>";
						content += "<a href=\"?restoreEvent=true&id=" + i + "\">Restore</a><br><br>\n";	
					content += "</div>";
				}
				
			}
		} else
			content = "No postings have been made.";
		
		var content = {
				'content' : content,
				'title' : 'World Blog'
		};
		
		
		//replaces content vars in template data.
		data = fillContent(content, data);
		
		response.write(data);
		response.end();
	});
}

function swi(response, postData) {
    console.log("Request handler 'index' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });

    if (postData != null) {
        var query = qs.parse(postData);
        if (query.deleteEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = true;
            }
        }

        if (query.restoreEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = false;
            }
        }


        writePostings();

    }

    // This is just an idea on how we can do it I guess?

    //html for each page is stored in /views/page_name.html
    fs.readFile('./views/swi.html', 'utf8', function (err, data) {

        //Create array, containing each variable we're replacing in html

        var content = "";//"<h1>Posts</h1>";

        if (postings.length > 0) {
            for (var i = postings.length - 1; i >= 0; i--) {
                var post = postings[i];
                if (post.deleted)
                    continue;

                content += "<div id=\"temp\">";
                content += "<pre><strong>" + post.name + "</strong></pre>";
                content += "<p><b>" + post.title + "</b></p>";
                content += "<p>" + post.content + "</p>";
                content += "<p>" + prettyDate(post.date) + "</p>";
                content += "<a href=\"?deleteEvent=true&id=" + i + "\">Delete</a><br><br>\n";
                content += "</div>";
            }

            var showDiv = true;
            if (showDeletedPosts) {

                for (var i = postings.length - 1; i >= 0; i--) {
                    var post = postings[i];

                    if (!post.deleted)
                        continue;

                    if (showDiv) {
                        content += "<div id=\"temp\"><h1>Deleted Posts</h1></div>";
                        showDiv = false;
                    }
                    content += "<div id=\"temp\">";
                    content += "<pre><strong>" + post.name + "</strong></pre>";
                    content += "<p><b>" + post.title + "</b></p>";
                    content += "<p>" + post.content + "</p>";
                    content += "<p>" + prettyDate(post.date) + "</p>";
                    content += "<a href=\"?restoreEvent=true&id=" + i + "\">Restore</a><br><br>\n";
                    content += "</div>";
                }

            }
        } else
            content = "No postings have been made.";

        var content = {
            'content': content,
            'title': 'Travel'
        };


        //replaces content vars in template data.
        data = fillContent(content, data);

        response.write(data);
        response.end();
    });
}

function aus(response, postData) {
    console.log("Request handler 'index' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });

    if (postData != null) {
        var query = qs.parse(postData);
        if (query.deleteEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = true;
            }
        }

        if (query.restoreEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = false;
            }
        }


        writePostings();

    }

    // This is just an idea on how we can do it I guess?

    //html for each page is stored in /views/page_name.html
    fs.readFile('./views/aus.html', 'utf8', function (err, data) {

        //Create array, containing each variable we're replacing in html

        var content = "";//"<h1>Posts</h1>";

        if (postings.length > 0) {
            for (var i = postings.length - 1; i >= 0; i--) {
                var post = postings[i];
                if (post.deleted)
                    continue;

                content += "<div id=\"temp\">";
                content += "<pre><strong>" + post.name + "</strong></pre>";
                content += "<p><b>" + post.title + "</b></p>";
                content += "<p>" + post.content + "</p>";
                content += "<p>" + prettyDate(post.date) + "</p>";
                content += "<a href=\"?deleteEvent=true&id=" + i + "\">Delete</a><br><br>\n";
                content += "</div>";
            }

            var showDiv = true;
            if (showDeletedPosts) {

                for (var i = postings.length - 1; i >= 0; i--) {
                    var post = postings[i];

                    if (!post.deleted)
                        continue;

                    if (showDiv) {
                        content += "<div id=\"temp\"><h1>Deleted Posts</h1></div>";
                        showDiv = false;
                    }
                    content += "<div id=\"temp\">";
                    content += "<pre><strong>" + post.name + "</strong></pre>";
                    content += "<p><b>" + post.title + "</b></p>";
                    content += "<p>" + post.content + "</p>";
                    content += "<p>" + prettyDate(post.date) + "</p>";
                    content += "<a href=\"?restoreEvent=true&id=" + i + "\">Restore</a><br><br>\n";
                    content += "</div>";
                }

            }
        } else
            content = "No postings have been made.";

        var content = {
            'content': content,
            'title': 'Travel'
        };


        //replaces content vars in template data.
        data = fillContent(content, data);

        response.write(data);
        response.end();
    });
}

function egy(response, postData) {
    console.log("Request handler 'index' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });

    if (postData != null) {
        var query = qs.parse(postData);
        if (query.deleteEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = true;
            }
        }

        if (query.restoreEvent) {
            if (query.id >= 0 && query.id < postings.length) {
                postings[query.id].deleted = false;
            }
        }


        writePostings();

    }

    // This is just an idea on how we can do it I guess?

    //html for each page is stored in /views/page_name.html
    fs.readFile('./views/egy.html', 'utf8', function (err, data) {

        //Create array, containing each variable we're replacing in html

        var content = "";//"<h1>Posts</h1>";

        if (postings.length > 0) {
            for (var i = postings.length - 1; i >= 0; i--) {
                var post = postings[i];
                if (post.deleted)
                    continue;

                content += "<div id=\"temp\">";
                content += "<pre><strong>" + post.name + "</strong></pre>";
                content += "<p><b>" + post.title + "</b></p>";
                content += "<p>" + post.content + "</p>";
                content += "<p>" + prettyDate(post.date) + "</p>";
                content += "<a href=\"?deleteEvent=true&id=" + i + "\">Delete</a><br><br>\n";
                content += "</div>";
            }

            var showDiv = true;
            if (showDeletedPosts) {

                for (var i = postings.length - 1; i >= 0; i--) {
                    var post = postings[i];

                    if (!post.deleted)
                        continue;

                    if (showDiv) {
                        content += "<div id=\"temp\"><h1>Deleted Posts</h1></div>";
                        showDiv = false;
                    }
                    content += "<div id=\"temp\">";
                    content += "<pre><strong>" + post.name + "</strong></pre>";
                    content += "<p><b>" + post.title + "</b></p>";
                    content += "<p>" + post.content + "</p>";
                    content += "<p>" + prettyDate(post.date) + "</p>";
                    content += "<a href=\"?restoreEvent=true&id=" + i + "\">Restore</a><br><br>\n";
                    content += "</div>";
                }

            }
        } else
            content = "No postings have been made.";

        var content = {
            'content': content,
            'title': 'Travel'
        };


        //replaces content vars in template data.
        data = fillContent(content, data);

        response.write(data);
        response.end();
    });
}

function post(response, postData) {
	console.log("Request handler 'post' was called.");
	
	
	response.writeHead(200, {"Content-Type": "text/html"});
	var errorMessage = null;

	var post = qs.parse(postData);
    
	
	if (postData != null) {
	    
	
		if(post.title != null 
				&& post.title.length > 0 
				&& post.content != null 
				&& post.content.length > 0
				&& (post.poster > 0 
						|| (post.poster == 0 
								&& post.name != null 
								&& post.name.length > 0))){

			date = new Date();
			post.date = Math.floor(date.getTime()/1000);
			post.deleted = false;
			
			if(post.poster == 0)
				post.name = "Traveller";
			
			if(post.poster == 1)
				post.name = "Manager";
			
			postings[postings.length] = post;
		} else {
			errorMessage = "Please fill in all fields.";
		}
	}
	console.log("e" + errorMessage);
	console.log("e" + postData);
	if((errorMessage != null || postData == null)){
		fs.readFile('./views/post.html', 'utf8', function(err, data){
	
			if(errorMessage == null)
				errorMessage = "";
			
			var content = {
					'error': errorMessage
			};
	
			data = fillContent(content, data);
			response.write(data);
			response.end();
	
		});
	} else {
		fs.readFile('./views/redirect.html', 'utf8', function(err, data){
			
			response.write(data);
			response.end();
	
		});
	}
	
	writePostings();
}

function error404(path, response, postData) {
	console.log("Request handler 'error404' was called.");

	
	fs.exists("./views/" + path, function(exists){
		if(exists){
			fs.readFile("./views/" + path, function (err, data){
				response.writeHead(200, {"Content-Type": "text/css"}); 
				response.write(data);
				response.end();
			});
		} else {
			response.writeHead(404, {"Content-Type": "text/css"}); 
			response.write("404 Not Found");
			response.end();
		}
	});
}

function index(response, postData) {
    console.log("Request handler 'headpage' was called.");

    response.writeHead(200, { "Content-Type": "text/css" });
    fs.readFile('./views/index.html', 'utf8', function (err, data) {
        //console.log("error: " + err);
        //console.log("data: " + data);
        if (err) {
            response.writeHead(404);
            response.write("oops problem loading this page - 404");
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
        }

        response.end();
    });
    
                
          
}


function writePostings(){
	fs.writeFile("./postings.json", JSON.stringify(postings), function(err){
		if(!err)
			console.log("written");
	});
}

function fillContent(obj, data){

	for(var key in obj)
		data = data.replace('{' + key + '}', obj[key]);
	
	return data;
		
}

function prettyDate(postTime){
	var a = new Date();
	var currentTime = Math.floor(a.getTime()/1000);
	var diff = currentTime - postTime;
	
	var ret = "";
	
	if(diff < 60){
		var b = (diff % 60);
		ret = "Posted " + b + " second" + (b > 1 ? "s" : "") + " ago.";
	} else if(diff < 3600){
		var b = (Math.floor(diff / 60) % 60);
		ret = "Posted " + b + " minute" + (b > 1 ? "s" : "") + " ago.";
	} else if(diff < (3600 * 24)){
		var b = (Math.floor(diff / 3600) % 24);
		ret = "Posted " + b + " hour" + (b > 1 ? "s" : "") + " ago.";
	} else if(diff < (3600 * 24 * 7)){
		var b = (Math.floor(diff / (3600 * 24)) % 7);
		ret = "Posted " + b + " day" + (b > 1 ? "s" : "") + " ago.";
	} else {
		var d = new Date(postTime);
		ret = "Posted " + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + ".";
	}
	
	return ret;
}

exports.aus = aus;
exports.swi = swi;
exports.egy = egy;
exports.bah = bah;
exports.index = index;
exports.post = post;
exports.error404 = error404;
