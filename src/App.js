// !IMPORT ZONE
import "./App.scss";
import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Prompts from "./components/Prompts.js";
import Home from "./components/Home.js";
import Main from "./components/Main.js";
import firebase from "./firebase";
import { getDatabase, ref, onValue, push, get, set } from "firebase/database";
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
		console.log("component mount");
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
				console.log(error);
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
		console.log(today);
		if (localStorage.storedCurrentDay !== today) {
			// run the new prompt fn
			let spreadPrompts = { ...prompts };
			console.log(spreadPrompts);
			// delete that entry from the array
			console.log("current day if statement firing", today);
			delete spreadPrompts[Object.keys(prompts)[0]];
			console.log(spreadPrompts);

			// update the states
			setPrompts(spreadPrompts);
			setPOTD(prompts[Object.keys(prompts)[0]]);
			// set localstorage date to current date
			localStorage.setItem("storedCurrentDay", today);

			// update the firebase that the prompt got deleted
			set(dbRef, spreadPrompts);
		} else {
			console.log("you are on the same day");
			setPOTD(prompts[Object.keys(prompts)[0]]);
		}

		// *setPOTD logic (deprecated?)
		// if (prompts) {
		// 	// const promptTopic = prompts[0]["prompt"];
		// 	setPOTD(prompts[0]["prompt"]);
		// }
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
			<Footer />
		</div>
	);
}

export default App;

// !DEPRECATION ZONE
// *Get Prompts from Firebase - async fn
// const getFirebasePrompts = async () => {
// 	// get firebase going
// 	const database = getDatabase(firebase);
// 	const dbRef = ref(database);
// 	// here's the await, make it return the data
// 	const snapshot = await get(dbRef);
// 	// .val to clean it up
// 	const data = snapshot.val();
// 	return data;
// };

// *on currentDay change -> change POTD
// useEffect(() => {
// 	console.log("currentDay useEffect firing");
// 	if (localStorage.storedCurrentDay !== currentDay) {
// 		// run the new prompt fn
// 		let spreadPrompts = [...prompts];
// 		console.log(spreadPrompts);

// 		// delete that entry from the array
// 		spreadPrompts.shift();
// 		setPrompts(spreadPrompts);
// 		// set localstorage to current date time
// 		localStorage.setItem("storedCurrentDay", currentDay);
// 	} else {
// 		console.log("you are on the same day");
// 	}
// }, [currentDay]);

// *when prompts changes -> push to firebase
// useEffect(() => {
// 	// *Create references to the database
// 	const database = getDatabase(firebase);
// 	const dbRef = ref(database);

// 	// update firebase dp with newly updated prompts array state
// 	push(dbRef, prompts);
// }, [prompts]);

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

// !DEPRECATION ZONE
// *when prompts changes -> push to firebase
// useEffect(() => {
// 	// *Create references to the database
// 	const database = getDatabase(firebase);
// 	const dbRef = ref(database);

// 	// update firebase dp with newly updated prompts array state
// 	push(dbRef, prompts);
// }, [prompts]);

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
