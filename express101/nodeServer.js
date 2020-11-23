const http = require("http");

const server = http.createServer((req, res) => {

	/**
	 * @param res: our way of responding to requester
	 * * http messages has:
	 * * 1.Startline - node does this for us - check
	 * * 2. header
	 * * 3. body
	 * @function writeHead() takes two args:
	 * @argument status code
	 * @argument object for mime-type
	 */

	res.writeHead(200, { "content-type": "text/html" });
	res.write("<h1>Hello, World!</h1>");
	res.end();
});

server.listen(3000);
