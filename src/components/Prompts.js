// !IMPORT ZONE
import { useState, useEffect } from "react";

const Prompts = () => {
	// !STATE ZONE
	// list of prompts
	const [prompts, setPrompts] = useState([]);
	// current day
	const [currentDay, setCurrentDay] = useState("");
	// prompt of the day
	const [POTD, setPOTD] = useState("");
	// newDay
	const [newDay, setNewDay] = useState("");

	// !USE EFFECT ZONE
	// *component mount
	useEffect(() => {
		// TODO get the array from firebase
		// set prompts state
		setPrompts(["first prompt", "second prompt", "third prompt"]);

		let statelessCurrentDay = new Date().getDate();
		// make it stateful
		setCurrentDay(statelessCurrentDay);
	}, []);

	// *fn that runs when the newDay state changes

	// !FUNCTION ZONE
	// *Update Prompt
	// *localstorage time listener
	const timeCheck = () => {
		// declare current day in a variable
		let statelessCurrentDay = new Date().getDate();
		setNewDay(statelessCurrentDay.toString());
		console.log(newDay);
		console.log(localStorage.storedCurrentDay, newDay);

		if (localStorage.storedCurrentDay !== newDay) {
			// run the new prompt fn
			// updatePrompt();
			setPOTD(prompts[0]);

			// delete that entry from the array
			prompts.shift();
			// set localstorage to current date time
			localStorage.setItem("storedCurrentDay", statelessCurrentDay);
		} else {
			console.log("you are on the same day");
		}
	};

	// !ADD USER QUOTE
	// *text input on change, update a state of userInput
	const updateUserInput = (e) => {
		setUserInput(e.target.value);
	};
	// *onclick on send button, push that state to the stateless version of the quotes array
	const submitUserPrompt = (e) => {
		e.preventDefault();

		// unstatify prompts so we can edit it
		const statelessPrompts = [...prompts];

		// push userInput to that array
		statelessPrompts.push(userInput);

		// set it back into state
		setPrompts(statelessPrompts);
	};
	// !RETURN

	return (
		<div className="prompts">
			<p>{POTD}</p>

			<button onClick={timeCheck}>anotha one</button>
		</div>
	);
};
export default Prompts;
