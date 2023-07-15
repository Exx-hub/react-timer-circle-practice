import jumping from "../assets/jumping-jacks.gif";
import useTimerControls from "../hooks/useTimerControls";

function TimerUseRef({ duration }: { duration: number }) {
  const { secondsTimer, circlePercentageTimer, startTimer, stopTimer, resetTimer } =
    useTimerControls(duration);

  console.log("i re-rendered!");

  return (
    <div>
      <h1>Workout Timer with useRef</h1>
      <div>Seconds: {secondsTimer}</div>
      <div>CirclePercentage: {circlePercentageTimer}</div>
      <div className="flex space-x-1">
        <button onClick={startTimer} className="btn">
          Start
        </button>
        <button onClick={stopTimer} className="btn">
          Stop
        </button>
        <button onClick={resetTimer} className="btn">
          Reset
        </button>
      </div>

      <div className="relative w-80 h-80">
        <div
          style={{
            backgroundImage: `conic-gradient(${"#e76456"} ${circlePercentageTimer}%, transparent 0%)`,
          }}
          className="h-full w-full rounded-full"
        >
          {/* BLACK CIRCLE BORDER OVER TIMER CIRCLE TO COVER INNER PART ADN JUST SHOW RED LINE CIRCLE FOR TIMER  */}
          <div className="bg-black rounded-full z-[99] h-[90%] w-[90%] absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"></div>

          <div className="rounded-full h-[80%] w-[80%] absolute overflow-hidden z-[100] top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <img src={jumping} alt="jumping" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerUseRef;
