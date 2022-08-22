
// !IMPORT ZONE
import Home from "./components/Home.js";
import "./App.scss";
import { Link, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* //TODO update this with the writing page */}
				<Route path="/writing" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

