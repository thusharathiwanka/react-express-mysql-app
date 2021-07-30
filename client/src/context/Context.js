import React, { createContext } from "react";
import App from "../App";

export const EmployeeContext = createContext();

const Context = () => {
	<EmployeeContext.Provider value={{}}>
		<App />
	</EmployeeContext.Provider>;
};

export default Context;
