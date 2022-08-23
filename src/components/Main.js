import Timer from "./Timer";
import Form from "./Form";

const Main = () => {
  return (
    <div className="wrapper">
      <main className="Main">
        {/* //writing prompt */}
        <blockquote>Writing Prompt</blockquote>
        {/* Notification Clock */}
        <Timer timeslot={1} />
        {/* Writing area */}
        <Form />
      </main>
    </div>
  );
};

export default Main;
