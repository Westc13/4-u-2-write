import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState, useEffect } from "react";

import TimerContext from "../contexts/TimerContext";
import toast from "react-hot-toast";

const Timer = () => {
	// !STATE ZONE
	const { time, setTime } = useContext(TimerContext);
	const [showTime, setShowTime] = useState(false);
	const [startingTime, setStartingTime] = useState(time);

	// !FUNCTION ZONE
	//calculate minutes into seconds
	const formatTime = (time) => {
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = Math.floor((time % 3600) % 60);

		const minutesDisplay = minutes > 0 ? minutes : "";
		const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
		return `${minutesDisplay}:${secondsDisplay}`;
	};

	//*handle mouse over -- hover over clock icon to toggle state that shows remaining time
	const handleOnMouseEnter = () => {
		if (time > 120) {
			setShowTime(true);
		}
	};

	//*handle mouse leave
	const handleOnMouseLeave = () => {
		if (time > 120) {
			setShowTime(false);
		}
	};

	// *counts down their selected time, alerts every 5 minutes/when elapsed
	useEffect(() => {
		const timer = setInterval(() => {
			let interval = 300;
			if (time > 0) {
				if (time === startingTime - interval) {
					toast("5 mins have passed");
					setStartingTime(startingTime - interval);
				}
				setTime(time - 1);
			}

			if (time === 0) {
				clearInterval(timer);
				alert("Your selected time is up!");
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div
			className="Main__timer"
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			{time > 120 ? (
				showTime ? (
					<p>{formatTime(time)}</p>
				) : (
					<FontAwesomeIcon icon={faClock} className="icon__clock" />
				)
			) : (
				<p>{formatTime(time)}</p>
			)}
		</div>
	);
};
export default Timer;
