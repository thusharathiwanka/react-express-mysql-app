import React, { createContext, useState } from "react";
import App from "../App";

export const EmployeeContext = createContext();

const Context = () => {
	const [employee, setEmployee] = useState({});

	return (
		<EmployeeContext.Provider value={{ employee, setEmployee }}>
			<App />
		</EmployeeContext.Provider>
	);
};

export default Context;
