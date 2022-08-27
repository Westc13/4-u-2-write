import Timer from "./Timer";
import Form from "./Form";
import Prompts from "./Prompts";
import AddPrompt from "./AddPrompt";

const Main = ({ POTD, prompts, setPrompts }) => {
  return (
    <div className="wrapper">
      <main className="Main">
        {/* //writing prompt */}
        <Prompts POTD={POTD} />
        {/* <blockquote>Writing Prompt</blockquote> */}
        {/* Notification Clock */}
        <Timer timeslot={1} />
        {/* Writing area */}
        <Form />
        <AddPrompt prompts={prompts} setPrompts={setPrompts} />
      </main>
    </div>
  );
};

export default Main;
