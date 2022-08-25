import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [userText, setUserText] = useState("");
  const [isIdle, setIdle] = useState(true);
  const lapse = 15000;

  const handleKeyUp = () => {
    setIdle(true);
  };

  const handleUserText = (e) => {
    setUserText(e.target.value);
    setIdle(false);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (!isIdle) clearInterval(myInterval);
      else toast("15 seconds");
    }, lapse);

    return () => {
      clearInterval(myInterval);
    };
  }, [isIdle]);

  //   const inputChecker = () => {};

  //   const clearLapse = () => {
  //     return clearInterval(myInterval);
  //   };

  //on keyUp start checker (setTimeout)
  //on keyDown stop checker clearInterval reset lapse time

  return (
    <form className="Main__form">
      <fieldset>
        <label htmlFor="journal" className="sr-only">
          Write here
        </label>
        <textarea
          name="journal"
          id=""
          cols="30"
          rows="30"
          value={userText}
          onChange={handleUserText}
          onKeyUp={handleKeyUp}
        ></textarea>
      </fieldset>
      <fieldset className="Main__promptfield">
        <button className="Main__addBtn button">Add</button>

        <div className="Main__addPrompt">
          <label htmlFor="prompt" className="sr-only">
            Enter your prompt
          </label>
          <input id="prompt" type="text" className="Main__inputPrompt" />
          <span className="Main__undoBtn">
            <FontAwesomeIcon icon={faUndo} className="icon__Undo" />
          </span>
          <button className="Main__confirmBtn button">Confirm</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
