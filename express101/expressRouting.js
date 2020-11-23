const express = require("express");
const app = express();

// app.all("/", (req, res) => {
// 	res.send("<h1>Welcome To Home Page </h1>");
// });
app.get("/", (req, res) => {
	res.send("<h1>Welcome To Home GET Page </h1>");
});
app.post("/", (req, res) => {
	res.send("<h1>Welcome To Home POST Page </h1>");
});
app.delete("/", (req, res) => {});
app.put("/", (req, res) => {});

app.listen(3000, () => console.log("Server starting up!"));
