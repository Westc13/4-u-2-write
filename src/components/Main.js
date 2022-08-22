import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUndo } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
      <div className="wrapper">
        <main className="Main">
          {/* //writing prompt */}
          <blockquote>Writing Prompt</blockquote>
          {/* Notification Clock */}
          <div className="Main__timer">
            <FontAwesomeIcon icon={faClock} className="icon__clock" />
          </div>
          {/* Writing area */}
          <form className="Main__form">
            <fieldset>
              <label htmlFor="journal" className="sr-only">
                Write here
              </label>
              <textarea name="journal" id="" cols="30" rows="30"></textarea>
            </fieldset>
            <fieldset className="Main__promptfield">
              <button className="Main__addBtn button">Add</button>

              <div className="Main__addPrompt">
                <label htmlFor="prompt" className="sr-only">
                  Enter your prompt
                </label>
                <input id="prompt" type="text" className="Main__inputPrompt" />
                <span className="Main__undoBtn">
                  <FontAwesomeIcon icon={faUndo} className="icon__Undo"/>
                </span>
                <button className="Main__confirmBtn button">Confirm</button>
              </div>
            </fieldset>
          </form>
        </main>
      </div>
  );
};

export default Main;
