var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.index;
handle["/index"] = requestHandlers.index;
handle["/bah"] = requestHandlers.bah;
handle["/swi"] = requestHandlers.swi;
handle["/aus"] = requestHandlers.aus;
handle["/egy"] = requestHandlers.egy;
handle["/post"] = requestHandlers.post;
handle["/404"] = requestHandlers.error404;

server.start(router.route, handle);