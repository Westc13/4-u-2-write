import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimerContext from "../contexts/TimerContext";
import TimerContext from "../contexts/TimerContext";

const Form = () => {
  const { time } = useContext(TimerContext);
  const { time } = useContext(TimerContext);
  const [userText, setUserText] = useState("");
  const [isIdle, setIsIdle] = useState(true);
  const idleInterval = 15000;

	const handleChange = (e) => {
		setUserText(e.target.value);
    setIsIdle(false);
	};

  const handleKeyUp = () => {
    setIsIdle(true);
  };

  useEffect(() => {
    let countDown = time;
    let countDown = time;
    const myInterval = setInterval(() => {
      if (countDown > 0) {
        if (isIdle) toast("15 seconds");
        else clearInterval(myInterval);
        countDown -= 15;
      }
      if (countDown === 0) {
        clearInterval(myInterval);
      }
    }, idleInterval);

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
          id="journaljournal"
          cols="30"
          rows="30"
          value={userText}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onMouseUp={() => {
            setIsIdle(true);
          }}
          onMouseDown={() => {
            setIsIdle(false);
          }}
          onMouseUp={() => {
            setIsIdle(true);
          }}
          onMouseDown={() => {
            setIsIdle(false);
          }}
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
