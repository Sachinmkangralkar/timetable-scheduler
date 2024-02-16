import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Select from "./components/Select";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/" exact element={<Signup />} />{/**change to select */}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/select" exact element={<Select />} />
			<Route path="/main" exact element={<Main />} />
		</Routes>
	);
}

export default App;
