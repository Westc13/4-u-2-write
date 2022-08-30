// !IMPORT ZONE
import { useState } from "react";
import firebase from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { toast } from "react-hot-toast";

const AddPrompt = () => {
	// !STATE ZONE
	// userInput
	const [userInput, setUserInput] = useState('');
	const [cancelPrompt, setCancelPrompt] = useState(false);

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
	
			// put userInput in an object that can be pushed
			let objectToPush = {
				prompt: userInput,
			};
			// push it to firebase
			push(dbRef, objectToPush);
			
	
	};

	// *toggle class on click
	const toggleClass = () => {
		const addPrompt = document.querySelector(".Main__addPrompt");
		addPrompt.classList.toggle("Main__addPrompt--animation");
		setCancelPrompt(!cancelPrompt);
	};

	// *combined function to run on confirm button
	const handleConfirm = (e) => {
		if (userInput){
			submitUserPrompt(e);
			toast.success("Thanks for the prompt!");
			toggleClass();
			setUserInput('')
			
		} else {
			toast.error('Please Enter a Prompt')
		}
		// TODO -- make this use the toast thing taimoor knows how to do :)
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
					{cancelPrompt ? 'Nevermind!' : 'Add A Prompt!'} 
				
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
					value={userInput}
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
