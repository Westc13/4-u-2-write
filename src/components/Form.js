import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimerContext from "../contexts/TimerContext";

const Form = () => {
  // !STATE ZONE
  const { time } = useContext(TimerContext);
  const [userText, setUserText] = useState("");
  const [isIdle, setIsIdle] = useState(true);

  // !USE EFFECT
  useEffect(() => {
    let countDown = time;
    const myInterval = setInterval(() => {
      if (countDown > 0) {
        if (isIdle) toast("It's been 15 seconds! Keep the flow going!");
        else clearInterval(myInterval);
        countDown -= 15;
      }
      if (countDown === 15) {
        clearInterval(myInterval);
      }
    }, idleInterval);

    return () => {
      clearInterval(myInterval);
    };
    // comment to make eslint not angry with us:
  }, [isIdle]); // eslint-disable-line react-hooks/exhaustive-deps

  // !FUNCTION ZONE
  const idleInterval = 15000;

  const handleChange = (e) => {
    setUserText(e.target.value);
    setIsIdle(false);
  };

  const handleKeyUp = () => {
    setIsIdle(true);
  };

  // !RETURN
  return (
    <form className="Main__form">
      <fieldset>
        <label htmlFor="journal" className="sr-only">
          Write here
        </label>
        <textarea
          name="journal"
          id="journal"
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
        ></textarea>
      </fieldset>
    </form>
  );
};

export default Form;
