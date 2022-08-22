import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUndo } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main className="Main">
      {/* //writing prompt */}
      <h1>Writing Prompt</h1>
      {/* Notification Clock */}
      <div className="Main__timer">
        <FontAwesomeIcon icon={faClock} />
      </div>
      {/* Writing area */}
      <form className="Main__form">
        <fieldset>
          <label htmlFor="journal" class="sr-only">
            Write here
          </label>
          <textarea name="journal" id="" cols="30" rows="10"></textarea>
        </fieldset>
        <fieldset>
          <span className="Main__addBtn">Add</span>

          <div className="Main__addPrompt">
            <label htmlFor="prompt" className="sr-only">
              Enter your prompt
            </label>
            <input id="prompt" type="text" className="Main__inputPrompt" />
            <span className="Main__undoBtn">
              <FontAwesomeIcon icon={faUndo} />
            </span>
            <button className="Main__confirmBtn">Confirm</button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Main;
