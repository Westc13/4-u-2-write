import Timer from "./Timer";
import Instructions from "./Instructions";
import Form from "./Form";
import Prompts from "./Prompts";
import AddPrompt from "./AddPrompt";
import { Link } from "react-router-dom";

const Main = ({ POTD, prompts, setPrompts, darkMode }) => {
  return (
    <div className={!darkMode ? "home lightMode" : "home darkMode"}>
      <main className="Main">
        <div className="Main__backButton">
          <Link className="lightBtn" to="/">
            Back↩
          </Link>
        </div>
        {/* //writing prompt */}
        {/* <Prompts POTD={POTD} /> */}
        <h2>"placeholder prompt"</h2>
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
