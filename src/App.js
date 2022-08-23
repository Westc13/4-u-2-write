
// !IMPORT ZONE
import Home from "./components/Home.js";
import "./App.scss";
import { Toaster } from 'react-hot-toast';
import { Link, Routes, Route } from "react-router-dom";
import Main from "./components/Main.js";

function App() {
	return (
		<div>
			<Toaster />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* //TODO update this with the writing page */}
				<Route path="/main" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;

