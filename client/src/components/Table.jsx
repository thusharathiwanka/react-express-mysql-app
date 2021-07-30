import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "./Row";

const Table = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		const getEmployees = async () => {
			const res = await axios.get("http://localhost:3001/employees");
			setEmployees(res.data);
		};
		getEmployees();
	}, [setEmployees]);

	const handleDelete = async (id) => {
		const res = await axios.delete(`http://localhost:3001/employees/${id}`);

		if (res.statusText === "OK") {
			setEmployees(employees.filter((employee) => employee.id !== id));
		}
	};

	const handleUpdate = async (id) => {};

	return (
		<table className="bg-white mt-20 text-gray-700">
			<tr>
				<th className="bg-indigo-200 border text-left px-8 py-4">
					Employee Name
				</th>
				<th className="bg-indigo-200 border text-left px-8 py-4">Age</th>
				<th className="bg-indigo-200 border text-left px-8 py-4">Country</th>
				<th className="bg-indigo-200 border text-left px-8 py-4">Position</th>
				<th className="bg-indigo-200 border text-left px-8 py-4">Wage</th>
				<th className="bg-indigo-200 border text-left px-8 py-4">Actions</th>
			</tr>
			{employees.map((employee) => {
				return (
					<Row
						employee={employee}
						key={employee.id}
						handleDelete={handleDelete}
					/>
				);
			})}
		</table>
	);
};

export default Table;
