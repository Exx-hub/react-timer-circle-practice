import { useEffect, useState } from "react";
import jumping from "../assets/jumping-jacks.gif";

function Timer({ duration }: { duration: number }) {
  const [secondsTimer, setSecondsTimer] = useState(0);
  // const [secondsTimer, setSecondsTimer] = useState(duration);
  // since passing prop as initial state is considered an anti pattern, except you are sure
  // that prop's value will never change during the lifecycle of the component.

  // for this we use useEffect to first set the state based on the prop

  // console.log("i re-rendered");

  const [countdownStarted, setCountdownStarted] = useState(false);

  const [circlePercentageTimer, setCirclePercentageTimer] = useState(100);

  const margin = 100 / duration;

  useEffect(() => {
    setSecondsTimer(duration);
  }, [duration]);

  useEffect(() => {
    if (countdownStarted) {
      if (secondsTimer > 0) {
        console.log("inside 2nd useEffect");

        // seconds timer
        const secondsTimerId = setInterval(() => {
          setSecondsTimer((prev) => prev - 1);
        }, 1000);

        // circle percentage timer
        const circleTimerId = setInterval(() => {
          setCirclePercentageTimer((prev) => prev - margin);
        }, 1000);

        return () => {
          console.log("clean up ran!");
          clearInterval(secondsTimerId);
          clearInterval(circleTimerId);
        };
      } else {
        console.log("time is up!");
      }
    }
  }, [secondsTimer, circlePercentageTimer, countdownStarted, duration, margin]);

  return (
    <>
      <div>Seconds: {secondsTimer}</div>
      <div>CirclePercentage: {circlePercentageTimer}</div>
      <button onClick={() => setCountdownStarted(true)}>Start</button>

      <div style={{ width: "300px", height: "300px", position: "relative" }}>
        <div
          style={{
            backgroundImage: `conic-gradient(${"#e76456"} ${circlePercentageTimer}%, transparent 0%)`,
            height: "100%",
            width: "100%",
            borderRadius: "1000px",
          }}
        >
          {/* BLACK CIRCLE BORDER OVER TIMER CIRCLE TO COVER INNER PART ADN JUST SHOW RED LINE CIRCLE FOR TIMER  */}
          <div
            style={{
              background: "black",
              borderRadius: "1000px",
              zIndex: "99",
              height: "90%",
              width: "90%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          <div
            style={{
              borderRadius: "1000px",
              height: "80%",
              width: "80%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              overflow: "hidden",
              zIndex: 100,
            }}
          >
            <img src={jumping} alt="jumping" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;

// run this after the countdown - when current exercise timer expires, run this
// will run after timer runs out
// timerDuration.current = setTimeout(() => {
//   clearTimers();
//   if (isLastWorkout) {
//     setDisplay("completed");
//     return;
//   }
//   setWorkoutIndex((prev) => prev + 1);
// }, 1000 * (pauseWithTimeLeft ? secondsTimer : duration));
