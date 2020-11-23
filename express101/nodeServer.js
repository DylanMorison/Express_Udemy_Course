const http = require("http");

// fs is file system module built into node.
// fs gives node access to THIS computer's file system.
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === "/") {
		/**
		 * * http messages has:
		 * * 1.Startline - node does this for us - check
		 * * 2. header
		 * * 3. body
		 * @function writeHead() takes two args:
		 * @argument status code
		 * @argument object for mime-type
		 */

		res.writeHead(200, { "content-type": "text/html" });
		const homePageHTML = fs.readFileSync("node.html");
		res.write(homePageHTML);
		res.end();
	} else if (req.url === "/node_logo.png") {
		res.writeHead(200, { "content-type": "image/png" });
		const image = fs.readFileSync("node_logo.png");
		res.write(image);
		res.end();
	} else if (req.url === "/styles.css") {
		res.writeHead(200, { "content-type": "text/css" });
		const css = fs.readFileSync("styles.css");
		res.write(css);
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		res.write("<h1>NO!</h1>");
		res.end();
	}
});

server.listen(3000);
