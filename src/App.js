// !IMPORT ZONE
import "./App.scss";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import firebase from "./firebase";
import { getDatabase, ref, get, set } from "firebase/database";
import Footer from "./components/Footer";
import Error from "./components/Error";


function App() {
	// !STATE ZONE
	// list of prompts
	const [prompts, setPrompts] = useState([]);
	// current day
	const [currentDay, setCurrentDay] = useState("");
	// prompt of the day
	const [POTD, setPOTD] = useState("");
	// darkMode
	const [darkMode, setDarkMode] = useState(true);

	// !PROMPT USE EFFECT ZONE
	// *component mount set prompts state from firebase + current day
	useEffect(() => {
		const database = getDatabase(firebase);
		const dbRef = ref(database);
		// here's the await, make it return the data
		get(dbRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					const data = snapshot.val();
					setPrompts(data);
				}
			})
			.catch((error) => {
				alert(
					"There was an error with the prompts database. Try again!"
				);
			});
	}, []);

	// !FUNCTION ZONE
	// *localstorage time listener + update POTD
	const timeCheck = () => {
		// get the firebase going
		const database = getDatabase(firebase);
		const dbRef = ref(database);

		// set the currentDay state to the current day (put it to string cuz that's how localStorage stores it)
		let today = new Date().getDate().toString();
		// if there IS a stored current day:
		if (localStorage.storedCurrentDay) {
			// if the day has changed:
			if (localStorage.storedCurrentDay !== today) {
				// run the new prompt fn
				let spreadPrompts = { ...prompts };
				// delete that entry from the array
				delete spreadPrompts[Object.keys(prompts)[0]];

				// update the states
				setPrompts(spreadPrompts);
				setPOTD(prompts[Object.keys(prompts)[0]]);
				// set localstorage date to current date
				localStorage.setItem("storedCurrentDay", today);

				// update the firebase that the prompt got deleted
				set(dbRef, spreadPrompts);
			} else {
				// if the day hasn't changed: keep it the same
				setPOTD(prompts[Object.keys(prompts)[0]]);
			}
		} else {
			// if there's no stored current day: keep it the same
			setPOTD(prompts[Object.keys(prompts)[0]]);
		}
	};

	const handleToggle = () => {
		setDarkMode(!darkMode);
	};

	// !RETURN
	return (
		<div>
			<Toaster />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							handleToggle={handleToggle}
							prompts={prompts}
							setPrompts={setPrompts}
							POTD={POTD}
							setPOTD={setPOTD}
							currentDay={currentDay}
							setCurrentDay={setCurrentDay}
							timeCheck={timeCheck}
							darkMode={darkMode}
						/>
					}
				/>
				{/* //TODO update this with the writing page */}
				<Route
					path="/main"
					element={
						<Main
							handleToggle={handleToggle}
							prompts={prompts}
							setPrompts={setPrompts}
							POTD={POTD}
							setPOTD={setPOTD}
							currentDay={currentDay}
							setCurrentDay={setCurrentDay}
							darkMode={darkMode}
						/>
					}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer darkMode={darkMode}/>
		</div>
	);
}

export default App;
