import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useCallback } from 'react';
import toast from "react-hot-toast";

const Timer = ({ timeslot }) => {
    // start a timer that is 15 mins long as soon as the component mount
    // put 5 mins interval in a state
    // when 2 mins remaining, showing an actual clock
    // make a function as a count down
    // const timetest = timeslot * 60000
    // setTimeout(()=>{alert("times up, you are dead");}, timetest)
    
    
    const timeInSeconds = timeslot * 60;
    const [time, setTime] = useState(60);
    // const countDownStart = useCallback(()=>{let countDownInterval = setInterval(() => {
    //             if (time === 0) {
    //                 clearInterval(countDownInterval);
    //             }
    //             if (time > 0) {
    //                 toast("I am not happy with you");
    //             }
    //         }, 5000)},[])

    const [startingTime, setStartingTime] = useState(60)
    useEffect(() => {
        // countDownStart()
        const timer = setTimeout(() => {
            let interval = 5
            if (time > 0) {
                console.log("help me")
                if (time === startingTime - interval) {
                    toast('5 mins have passed')
                    setStartingTime(startingTime-5)
                    setTime(time - 1);
                }
            }
            
            if (time === 0) {
                clearTimeout(timer)
                toast('you are dead')
            }
        }, 1000)


        return () => {
            clearTimeout(timer);
            // clearInterval(myInterval);
        };
    });

    // const [timer, setTimer]= useState(10)
    // useEffect(() => {
    //     console.log(timer)
    //     if (timer !== null) {
    //         let countDownInterval = setInterval(() => {
    //             if (timer === 0) {
    //                 clearInterval(countDownInterval);
    //             }
    //             if (timer > 0) {
    //                 toast("I am not happy with you");
    //                 setTimer(timer - 5);
    //             }
    //         }, 5000)
    //     }
        // return () => {
        //   clearInterval(countDownInterval);
        // };
    // }, [])
    // setInterval(() => {
    //     console.log("woooooo!")
    //   setTime(time - 1000);
    // }, 1000)
    // useEffect(() => {
    //     }, [time])
  return (
    <div className="Main__timer">
      <p style={{color:'red'}}>{time}</p>
      {/* <FontAwesomeIcon icon={faClock} className="icon__clock" /> */}
    </div>
  );
};
export default Timer;
