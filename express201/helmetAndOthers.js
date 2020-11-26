const express = require("express");
const app = express();
const helmet = require("helmet");

/**
 * Every Express  App has:
 * @module helmet: Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately. Helmet is actually just a collection of smaller middleware functions that set security-related HTTP response headers
 * @module static: The express. static() function is a built-in middleware function in Express. It serves static files and is based on serve-static. Parameters: The root parameter describes the root directory from which to serve static assets.
 * @module json: The express. json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
 * @module urlencoded: is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
 */

app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				styleSrc: ["'self'", "https:", "'unsafe-inline'"],
				fontSrc: ["'self'", "https:", "data:"],
				imgSrc: ["'self'", "https://image.tmdb.org"],
				scriptSrc: ["'self'", "'unsafe-inline'"],
				blockAllMixedContent: [],
				upgradeInsecureRequests: [],
				baseUri: ["'self'"],
				frameAncestors: ["'self'"]
			}
		}
	})
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
	console.log(req.body);
	res.json("Test");
});

app.listen(5000);
