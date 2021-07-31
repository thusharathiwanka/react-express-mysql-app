import React, { useContext } from "react";
import axios from "axios";

import { EmployeeContext } from "../context/Context";

const Form = () => {
	const { employee, setEmployee } = useContext(EmployeeContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post(
			"http://localhost:3001/employees/create",
			employee
		);

		if (res.status === 200) {
			console.log("set");
			setEmployee({});
		}
	};

	return (
		<form className="space-y-4 text-gray-700">
			<div className="flex flex-wrap">
				<div className="w-full">
					<label className="block mb-1" htmlFor="formGridCode_card">
						Employee Name
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="text"
						id="formGridCode_card"
						required
						value={employee.name}
						onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
				<div className="w-full px-2 md:w-1/2">
					<label className="block mb-1" htmlFor="formGridCode_name">
						Employee Age
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="number"
						id="formGridCode_name"
						required
						value={employee.age}
						onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
					/>
				</div>
				<div className="w-full px-2 md:w-1/2">
					<label className="block mb-1" htmlFor="formGridCode_last">
						Country
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="text"
						id="formGridCode_last"
						required
						value={employee.country}
						onChange={(e) =>
							setEmployee({ ...employee, country: e.target.value })
						}
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
				<div className="w-full px-2 md:w-1/2">
					<label className="block mb-1" htmlFor="formGridCode_month">
						Position
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="text"
						id="formGridCode_month"
						required
						value={employee.position}
						onChange={(e) =>
							setEmployee({ ...employee, position: e.target.value })
						}
					/>
				</div>
				<div className="w-full px-2 md:w-1/2">
					<label className="block mb-1" htmlFor="formGridCode_cvc">
						Wage
					</label>
					<input
						className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
						type="number"
						id="formGridCode_cvc"
						required
						value={employee.wage}
						onChange={(e) => setEmployee({ ...employee, wage: e.target.value })}
					/>
				</div>
			</div>
			<button
				className="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
				onClick={(e) => handleSubmit(e)}
			>
				Create Employee
			</button>
		</form>
	);
};

export default Form;
