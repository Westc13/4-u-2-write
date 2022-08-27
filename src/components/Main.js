import Timer from "./Timer";
import Instructions from "./Instructions";
import Form from "./Form";
import Prompts from "./Prompts";
import AddPrompt from "./AddPrompt";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../contexts/TimerContext";

const Main = ({ POTD, prompts, setPrompts, darkMode }) => {
  const { time } = useContext(TimerContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(time, POTD);
    if (!time || !POTD) {
      console.log("please work");
      navigate("/");
    }
  }, []);
  return (
    <div className={!darkMode ? "home lightMode" : "home darkMode"}>
      <main className="Main">
        <div className="Main__backButton">
          <Link className="lightBtn" to="/">
            Back↩
          </Link>
        </div>
        {/* //writing prompt */}
        <Prompts POTD={POTD} />
        {/* <h2>"placeholder prompt"</h2> */}
        {/* <blockquote>Writing Prompt</blockquote> */}
        {/* Notification Clock */}
        <Timer />
        {/* Writing area */}
        <Form />
        <Instructions />
        <AddPrompt prompts={prompts} setPrompts={setPrompts} />
      </main>
    </div>
  );

};

export default Main;
