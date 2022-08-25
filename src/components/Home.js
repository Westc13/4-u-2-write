// !IMPORT ZONE
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import TimerContext from "../contexts/TimerContext";

const Home = ({
  prompts,
  setPrompts,
  POTD,
  setPOTD,
  currentDay,
  setCurrentDay,
  timeCheck,
}) => {
  const { setTime } = useContext(TimerContext);

  const [userSelection, setUserSelection] = useState("placeholder");

  const handleOnChange = (e) => {
    setUserSelection(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    timeCheck();
  };

  useEffect(() => {
    setTime(userSelection);
  }, [userSelection]);

  return (
    <div className="home">
      <div className="wrapper">
        <header className="home__header">
          <div className="home__imageContainer">
            <img src={logo} alt="The 4 U 2 Write logo." />
          </div>

          <button className="myButton">Toggle Light/Dark Theme</button>
        </header>

        <main className="home__main">
          <h1>4 U 2 Write</h1>
          <form className="home__dropdownContainer" onSubmit={handleSubmit}>
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
              <option value={15}>15 minutes</option>
              <option value={1800}>30 minutes</option>
              <option value={2700}>45 minutes</option>
              <option value={3600}>60 minutes</option>
              {/* <option value="unlimited">Unlimited</option> */}
            </select>
            <label htmlFor="writingTime" className="sr-only">
              Choose your writing time
            </label>
            <button className="home__goButton button">
              <Link to="/main">Go</Link>
            </button>
          </form>
        </main>

        <aside className="home__aside">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            labore, neque distinctio voluptatem vero perferendis suscipit, ullam
            at ipsa earum cum cupiditate perspiciatis laborum adipisci porro
            exercitationem eveniet non iste!
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
