import Form from "./components/Form";

function App() {
	return (
		<div className="App">
			<h1 className="text-4xl font-bold text-gray-800 text-center py-5">
				Employee Management
			</h1>
			<div className="flex justify-center items-center w-full my-8">
				<Form />
			</div>
		</div>
	);
}

export default App;
