// !IMPORT ZONE
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
	// !FUNCTION ZONE
	// const toggleThemeType = () => {
	// 	$("html").toggleClass("light").toggleClass("dark");
	// };

	return (
		<div className="home">
			<div className="wrapper">
				<header className="home__header">
					<div className="home__imageContainer">
						<img src={logo} alt="The 4 U 2 Write logo." />
					</div>

					<button className="myButton">
						Toggle Light/Dark Theme
					</button>
				</header>

				<main className="home__main">
					<h1>4 U 2 Write</h1>
					<div className="home__dropdownContainer">
						<select
							className="home__dropdown"
							name="writingTime"
							id="writingTime"
						>
							<option value="none">
								Choose your writing time
							</option>
						</select>
						<label htmlFor="writingTime" className="sr-only">
							Choose your writing time
						</label>
						<Link className="home__goButton button" to="/">
							Go
						</Link>
					</div>
				</main>

				<aside className="home__aside">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Assumenda, labore, neque distinctio voluptatem vero
						perferendis suscipit, ullam at ipsa earum cum cupiditate
						perspiciatis laborum adipisci porro exercitationem
						eveniet non iste!
					</p>
				</aside>
				<footer className="home__footer">
					created at juno with unending spite
				</footer>
			</div>
		</div>
	);
};

export default Home;
