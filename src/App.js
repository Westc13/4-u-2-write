// !IMPORT ZONE
import "./App.scss";
import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Prompts from "./components/Prompts.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import firebase from "./firebase";
import { getDatabase, ref, onValue, push } from "firebase/database";

function App() {
	// !STATE ZONE
	// list of prompts
	const [prompts, setPrompts] = useState([]);
	// current day
	const [currentDay, setCurrentDay] = useState("");
	// prompt of the day
	const [POTD, setPOTD] = useState("");

	// !PROMPT USE EFFECT ZONE
	// *component mount set prompts state from firebase + current day
	useEffect(() => {
		// get firebase going
		const database = getDatabase(firebase);
		const dbRef = ref(database);
		onValue(dbRef, (response) => {
			const data = response.val();
			console.log(data);
			setPrompts(data);
		});

		// set current day state
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
			setPOTD(prompts[0]);
		}
	}, [currentDay]);

	// *when prompts changes -> push to firebase
	// useEffect(() => {
	// 	// *Create references to the database
	// 	const database = getDatabase(firebase);
	// 	const dbRef = ref(database);

	// 	// update firebase dp with newly updated prompts array state
	// 	push(dbRef, prompts);
	// }, [prompts]);

	// !FUNCTION ZONE
	// *Create references to the database
	// const database = getDatabase(firebase);
	// const dbRef = ref(database);

	// // when db value changes,
	// onValue(dbRef, (response) => {
	// 	const data = response.val();
	// 	console.log(data);

	// 	// TODO re-enable this
	// 	// update prompts state to hold our prompts from firebase that were stored in the array we made
	// 	setPrompts(data);
	// });

	// DEPRECATED: hardcoding prompts state for testing
	// setPrompts(["first prompt", "second prompt", "third prompt"]);

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
			<footer className="footer">
				created at juno with unending spite
			</footer>
		</div>
	);
}

export default App;
