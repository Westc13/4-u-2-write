// !IMPORT ZONE
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import TimerContext from "../contexts/TimerContext";
import toast from "react-hot-toast";
import { FaSun } from "react-icons/fa";

const Home = ({
	prompts,
	setPrompts,
	POTD,
	setPOTD,
	currentDay,
	setCurrentDay,
	timeCheck,
	darkMode,

	handleToggle,
}) => {
	// !STATE ZONE
	const { setTime } = useContext(TimerContext);
	const [userSelection, setUserSelection] = useState("placeholder");
	// *Navigate
	const navigate = useNavigate();

	// !FUNCTION ZONE
	const handleOnChange = (e) => {
		setUserSelection(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userSelection === "placeholder") {
			toast.error("You must choose a writing time.");
		} else {
			navigate("/main");
			timeCheck();
		}
	};

	useEffect(() => {
		setTime(userSelection);
	}, [userSelection]);

	return (
		<div className={!darkMode ? "home lightMode" : "home darkMode"}>
			<div className="wrapper">
				<header className="home__header">
					<div className="home__imageContainer">
						<img src={logo} alt="The 4 U 2 Write logo." />
					</div>

					<button
						className="lightBtn home__lightModeBtn"
						onClick={handleToggle}
					>
						<FaSun />
					</button>
				</header>

				<main className="home__main">
					<h1>4 U 2 Write</h1>
					<form
						className="home__dropdownContainer"
						onSubmit={handleSubmit}
					>
						<select
							className="home__dropdown"
							name="writingTime"
							id="writingTime"
							onChange={handleOnChange}
							value={userSelection}
						>
							<option value="placeholder" disabled>
								Choose your writing time
							</option>
							{/* //TODO update this to 15 mins */}
							<option value={130}>15 minutes</option>
							<option value={1800}>30 minutes</option>
							<option value={2700}>45 minutes</option>
							<option value={3600}>60 minutes</option>
							{/* <option value="unlimited">Unlimited</option> */}
						</select>
						<label htmlFor="writingTime" className="sr-only">
							Choose your writing time
						</label>

						<button className="home__goButton lightBtn">Go</button>
					</form>
				</main>

				<aside className="home__aside">
					<p>
						Choose an amount of time you want to write for, and get
						ready to focus! Don't forget to keep the flow going --
						if you haven't written anything in 15 seconds, we'll let
						you know so you can get back in the groove!
					</p>
				</aside>
			</div>
		</div>
	);
};

export default Home;
