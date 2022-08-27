import Timer from "./Timer";
import Form from "./Form";
import Prompts from "./Prompts";

const Main = ({ POTD, darkMode }) => {
	console.log(darkMode);
	return (
		<div className={darkMode ? 'home darkMode' : 'home lightMode'}>
			<main className="Main">
				{/* //writing prompt */}
				<Prompts POTD={POTD} />
				{/* <blockquote>Writing Prompt</blockquote> */}
				{/* Notification Clock */}
				<Timer timeslot={1} />
				{/* Writing area */}
				<Form />
			</main>
		</div>
	);
};

export default Main;
