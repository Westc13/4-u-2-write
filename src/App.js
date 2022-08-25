// !IMPORT ZONE
import "./App.scss";
import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Prompts from "./components/Prompts.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";

function App() {
	// !STATE ZONE
	// list of prompts
	const [prompts, setPrompts] = useState([]);
	// current day
	const [currentDay, setCurrentDay] = useState("");
	// prompt of the day
	const [POTD, setPOTD] = useState("");
	// userInput
	const [userInput, setUserInput] = useState([]);

	// !PROMPT LOGIC ZONE
	// *component mount
	useEffect(() => {
		// TODO get the array from firebase
		// set prompts state
		setPrompts(["first prompt", "second prompt", "third prompt"]);

		let statelessCurrentDay = new Date().getDate();
		// make it stateful
		setCurrentDay(statelessCurrentDay);
	}, []);

	// *on currentDay change -> change POTD
	useEffect(() => {
		if (localStorage.storedCurrentDay !== currentDay) {
			// run the new prompt fn
			// updatePrompt();
			setPOTD(prompts[0]);

			// delete that entry from the array
			prompts.shift();
			// set localstorage to current date time
			localStorage.setItem("storedCurrentDay", currentDay);
		} else {
			console.log("you are on the same day");
		}
	}, [currentDay]);

	// *fn that runs when the newDay state changes

	// !FUNCTION ZONE
	// *Update Prompt
	// *localstorage time listener
	const timeCheck = () => {
		// set the currentDay state to the current day (put it to string cuz that's how localStorage stores it)
		setCurrentDay(new Date().getDate().toString());
		console.log(currentDay);
		console.log(localStorage.storedCurrentDay, currentDay);
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
							prompts={prompts}
							setPrompts={setPrompts}
							POTD={POTD}
							setPOTD={setPOTD}
							currentDay={currentDay}
							setCurrentDay={setCurrentDay}
							timeCheck={timeCheck}
						/>
					}
				/>
				{/* //TODO update this with the writing page */}
				<Route
					path="/main"
					element={
						<Main
							prompts={prompts}
							setPrompts={setPrompts}
							POTD={POTD}
							setPOTD={setPOTD}
							currentDay={currentDay}
							setCurrentDay={setCurrentDay}
							timeCheck={timeCheck}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
