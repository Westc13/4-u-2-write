const AddPrompt = () => {
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
};
