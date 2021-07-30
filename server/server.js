const express = require("express");
const mysql = require("mysql");
const app = express();

mysql
	.createConnection({
		user: "root",
		host: "localhost",
		password: "",
		database: "employee_system",
	})
	.connect((err) => {
		if (err) {
			return console.log("something went wrong. db not connected");
		}

		console.log("db connected");
		app.listen(3001, () => {
			console.log("Server is running on PORT 3001");
		});
	});

app.get("/", (req, res) => {
	res.send("Employee Management System");
});
