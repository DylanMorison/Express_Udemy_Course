const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.all("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/node.html"));
});

app.all("*", (req, res) => {
	res.send("<h1>no</h1>");
});

app.listen(3000, () => console.log("Server starting up!"));
