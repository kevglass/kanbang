var http = require('http');
const PORT = process.env.PORT || 5000;


http.createServer(function (request, response) {
	response.writeHead(200);
	response.end("Kanbang Baby!", "utf-8");
}).listen(PORT);
console.log("Kanbang running on " + PORT);

