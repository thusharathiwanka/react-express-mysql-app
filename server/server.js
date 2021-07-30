const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mysql
	.createConnection({
		host: "localhost",
		user: "root",
		password: "",
		database: "employee_system",
	})
	.connect((err) => {
		if (err) {
			console.log(err);
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
