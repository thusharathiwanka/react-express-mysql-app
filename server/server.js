const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "employee_system",
});

db.connect((err) => {
	if (err) {
		console.log(err);
		return console.log("something went wrong. db not connected");
	}

	console.log("db connected");
	app.listen(3001, () => {
		console.log("Server is running on PORT 3001");
	});
});

app.post("/employees/create", (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const country = req.body.country;
	const position = req.body.position;
	const wage = req.body.wage;

	db.query(
		"INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)",
		[name, age, country, position, wage],
		(err, result) => {
			if (err) {
				return res.send(err.message);
			}
			return res.send("Employee added");
		}
	);
});

app.get("/employees", (req, res) => {
	db.query("SELECT * FROM employees", (err, result) => {
		if (err) return res.send(err.message);

		res.send(result);
	});
});

app.delete("/employees/:id", (req, res) => {
	db.query(
		"DELETE FROM employees WHERE id=?",
		[req.params.id],
		(err, result) => {
			if (err) return res.send(err.message);

			res.send("Employee deleted");
		}
	);
});

app.get("/", (req, res) => {
	res.send("Employee Management System");
});
