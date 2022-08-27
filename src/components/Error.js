import { Link } from "react-router-dom";

const Error = ({ darkMode }) => {
  console.log(darkMode);
  return (
    <section className={!darkMode ? "Error lightMode" : "Error"}>
      <h1>404!</h1>
      <p>please stop tying nonsense!</p>
      <Link className="darkBtn" to={`/`}>
        learn to type you morron!
      </Link>
    </section>
  );
};

export default Error;
