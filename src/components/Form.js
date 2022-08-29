import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimerContext from "../contexts/TimerContext";

const Form = () => {
	const { time } = useContext(TimerContext);
	const [userText, setUserText] = useState("");
	const [isIdle, setIsIdle] = useState(true);
	const idleInterval = 15000;

	const handleChange = (e) => {
		setUserText(e.target.value);
		setIsIdle(false);
	};

	const handleKeyUp = () => {
		setIsIdle(true);
	};

	useEffect(() => {
		let countDown = time;
		const myInterval = setInterval(() => {
			if (countDown > 0) {
				if (isIdle) toast("15 seconds");
				else clearInterval(myInterval);
				countDown -= 15;
			}
			if (countDown === 0) {
				clearInterval(myInterval);
			}
		}, idleInterval);

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
		<form className="Main__form">
			<fieldset>
				<label htmlFor="journal" className="sr-only">
					Write here
				</label>
				<textarea
					name="journal"
					id="journal"
					cols="30"
					rows="30"
					value={userText}
					onChange={handleChange}
					onKeyUp={handleKeyUp}
					onMouseUp={() => {
						setIsIdle(true);
					}}
					onMouseDown={() => {
						setIsIdle(false);
					}}
				></textarea>
			</fieldset>
		</form>
	);
};

export default Form;
