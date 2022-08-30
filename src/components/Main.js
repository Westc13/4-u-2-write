import Timer from "./Timer";
import Instructions from "./Instructions";
import Form from "./Form";
import Prompts from "./Prompts";
import AddPrompt from "./AddPrompt";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../contexts/TimerContext";

const Main = ({ POTD, setPOTD, prompts, setPrompts, darkMode }) => {
	// !STATE ZONE
	const { time } = useContext(TimerContext);
	const navigate = useNavigate();

	// !USE EFFECT
	useEffect(() => {
		if (!time || !prompts === true) {
			navigate("/");
		}
	}, []);

	// !RETURN

	return (
		<div className={!darkMode ? "home lightMode" : "home darkMode"}>
			<main className="Main">
				<header>
					<div className="Main__leftHeader">
						{/* Notification Clock */}
						<Timer />
						{/* //writing prompt */}
						<div className="Main__backButton">
							<Link className="lightBtn" to="/">
								Back↩
							</Link>
						</div>
					</div>
					<div className="Main__rightHeader">
						<Prompts
							prompts={prompts}
							POTD={POTD}
							setPOTD={setPOTD}
						/>
					</div>
				</header>
				{/* Writing area */}
				<Form />
				<Instructions />
				<AddPrompt prompts={prompts} setPrompts={setPrompts} />
			</main>
		</div>
	);
};

export default Main;
