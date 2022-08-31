import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimerContext from "../contexts/TimerContext";

const Form = () => {
	// !STATE ZONE
	const { time } = useContext(TimerContext);
	const [userText, setUserText] = useState("");
	const [isIdle, setIsIdle] = useState(true);

	// !USE EFFECT
	// *starts the initial idle timer
	useEffect(() => {
		// this is the selected writing time, NOT the 15 second timer interval
		let countDown = time;
		const myInterval = setInterval(() => {
			// conditional so it only happens if their chosen writing time hasn't run out:
			if (countDown > 0) {
				// if idle state has been set to true, alert
				if (isIdle) toast("It's been 15 seconds! Keep the flow going!");
				// if they've been typing, reset timer
				else clearInterval(myInterval);
				//adjust the countdown time appropriately
				countDown -= 15;
			}
			if (countDown <= 15) {
				clearInterval(myInterval);
			}
			// run again every 15 seconds (declared below)
		}, idleInterval);

		return () => {
			clearInterval(myInterval);
		};
		// comment to make eslint not angry with us:
	}, [isIdle]); // eslint-disable-line react-hooks/exhaustive-deps

	// !FUNCTION ZONE
	// defining 15 second idle interval
	const idleInterval = 15000;

	// when they type, update userText state and set idle to false
	const handleChange = (e) => {
		setUserText(e.target.value);
		setIsIdle(false);
	};

	// idle is set to true as SOON as key up happens, but the useEffect only checks on that idle value every 15 seconds, so it being true in the meantime doesn't trigger a toast
	const handleKeyUp = () => {
		setIsIdle(true);
	};

	// !RETURN
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
					// hard coded mouse setting the idle to false, same as above but without the userText state value
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
