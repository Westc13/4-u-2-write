// !IMPORT ZONE
import { useState, useEffect } from "react";

// !FUNCTION
const Prompts = () => {
	// !STATE ZONE
	// *list of prompts
	const [prompts, setPrompts] = useState([]);
	// *current day
	const [currentDay, setCurrentDay] = useState("");
	// *prompt of the day
	const [POTD, setPOTD] = useState("");

	// !USE EFFECT ZONE
	// *component mount
	useEffect(() => {
		// TODO get the array from firebase
		// *set prompts state
		setPrompts([
			"write about a dog",
			"write about the moon",
			"write about the international implications of the 1648 treaty of westphalia",
		]);

		// *declare current day in a variable
		let statelessCurrentDay = new Date().getDate();
		// *make it stateful
		setCurrentDay(statelessCurrentDay);
	}, []);

	// *fn that runs when the currentDay state changes
	useEffect(() => {
		console.log("do some shit");
		// *set POTD state equal to first entry in Prompts state array
		let statelessPOTD = prompts[0];
		console.log(statelessPOTD);
		setPOTD(statelessPOTD);

		// *delete that entry from the array
		prompts.shift();

		// TODO set the new array back to firebase
	}, [currentDay]);

	// !ADD USER QUOTE
	// *text input on change, update a state of userInput
	// *onclick on send button, push that state to the stateless version of the quotes array
	// *setstate quotes array to be equal to the stateless one

	// !RETURN

	return (
		<div className="prompts">
			<p>{POTD}</p>

			<button
				onClick={() => {
					setCurrentDay(currentDay + 1);
				}}
			>
				anotha one
			</button>
		</div>
	);
};

export default Prompts;
