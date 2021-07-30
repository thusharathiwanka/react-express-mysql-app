import React from "react";

const Row = ({ employee, handleDelete }) => {
	return (
		<tr>
			<td className="border px-8 py-4">{employee.name}</td>
			<td className="border px-8 py-4">{employee.age}</td>
			<td className="border px-8 py-4">{employee.country}</td>
			<td className="border px-8 py-4">{employee.position}</td>
			<td className="border px-8 py-4">{employee.wage}</td>
			<td className="border px-8 py-4">
				<button className="bg-indigo-600 py-1 px-3 mx-2 text-white rounded-sm">
					EDIT
				</button>
				<button
					className="bg-indigo-400 py-1 px-3 mx-2 text-white rounded-sm"
					onClick={() => handleDelete(employee.id)}
				>
					DELETE
				</button>
			</td>
		</tr>
	);
};

export default Row;
