const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Root route is working");
});

app.listen(3001, () => {
	console.log("Server is running on PORT 3001");
});
