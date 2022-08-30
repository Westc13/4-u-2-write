import { Link } from "react-router-dom";

const Error = ({ darkMode }) => {
	return (
		<section className={!darkMode ? "Error lightMode" : "Error"}>
			<h1>404!</h1>
			<p>This page doesn't exist!</p>
			<Link className="darkBtn" to={`/`}>
				Go back home!
			</Link>
		</section>
	);
};

export default Error;
