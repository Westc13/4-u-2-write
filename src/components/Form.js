import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimerContext from "../contexts/TimerContext";

const Form = () => {
	const [userText, setUserText] = useState("");
	const [isIdle, setIdle] = useState(true);
	const lapse = 15000;

	const handleKeyUp = () => {
		setIdle(true);
	};

	const handleUserText = (e) => {
		setUserText(e.target.value);
		setIdle(false);
	};

	useEffect(() => {
		const myInterval = setInterval(() => {
			if (!isIdle) clearInterval(myInterval);
			else toast("15 seconds");
		}, lapse);

		return () => {
			clearInterval(myInterval);
		};
	}, [isIdle]);

	//   const inputChecker = () => {};

	//   const clearLapse = () => {
	//     return clearInterval(myInterval);
	//   };

	//on keyUp start checker (setTimeout)
	//on keyDown stop checker clearInterval reset lapse time

	return (
		<div className="Main__formContainer">
			<form className="Main__form">
				<fieldset>
					<label htmlFor="journal" className="sr-only">
						Write here
					</label>
					<textarea
						name="journal"
						id=""
						cols="30"
						rows="30"
						value={userText}
						onChange={handleUserText}
						onKeyUp={handleKeyUp}
					></textarea>
				</fieldset>
			</form>
		</div>
	);
};

export default Form;
