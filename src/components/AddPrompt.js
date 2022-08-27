// !IMPORT ZONE
import { useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue, set, push } from "firebase/database";

const AddPrompt = ({ prompts, setPrompts }) => {
	// !STATE ZONE
	// userInput
	const [userInput, setUserInput] = useState([]);

	// !FUNCTION ZONE
	// *text input on change, update a state of userInput
	const updateUserInput = (e) => {
		setUserInput(e.target.value);
	};
	// *onclick on send button, push that state to the stateless version of the quotes array
	const submitUserPrompt = (e) => {
		e.preventDefault();
		// Create references to the database
		const database = getDatabase(firebase);
		const dbRef = ref(database);

		// unstatify prompts so we can edit it
		const statelessPrompts = [...prompts];

		// push userInput to that array
		statelessPrompts.push(userInput);

		// set it back into state
		setPrompts(statelessPrompts);

		// push(dbRef, prompts);
	};

	// *toggle class on click
	const toggleClass = () => {
		const addPrompt = document.querySelector(".Main__addPrompt");
		addPrompt.classList.toggle("Main__addPrompt--animation");
	};

	// *combined function to run on confirm button
	const handleConfirm = (e) => {
		submitUserPrompt(e);
		toggleClass();
		// TODO -- make this use the toast thing taimoor knows how to do :)
		alert("thanks for the prompt!");
	};

	// !RETURN
	return (
		<div className="Main__promptfield">
			<div className="Main__btnContainer">
				{/* <p>
					Add a writing prompt for future writers to draw inspiration
					from:
				</p> */}
				<button className="Main__addBtn lightBtn" onClick={toggleClass}>
					Add A Prompt!
				</button>
			</div>

			<div className="Main__addPrompt Main__addPrompt--animation">
				<label htmlFor="prompt" className="sr-only">
					Enter your prompt
				</label>
				<input
					id="prompt"
					type="text"
					className="Main__inputPrompt"
					onChange={updateUserInput}
				/>
				<button
					className="Main__confirmBtn darkBtn"
					onClick={handleConfirm}
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default AddPrompt;
