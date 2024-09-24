import { useRef, useState } from "react";

const fixTimeString = (time) => {
  return time < 10 ? `0${time}` : time;
};

const formatTimeToString = (time) => {
  const second = time % 60;
  const minute = Math.floor(time / 60) % 60;
  const hour = Math.floor(time / 3600) % 60;
  const outputString = `${fixTimeString(hour)}:${fixTimeString(
    minute
  )}:${fixTimeString(second)}`;

  return outputString;
};

export const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [splits, setSplits] = useState([]);
  const ref = useRef(null);

  const startStopwatch = () => {
    // this will help to avoid annoying behaver when we click on start button multiple time timer will behave annoyingly
    if (ref.current != null) return;

    ref.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseStopwatch = () => {
    clearInterval(ref.current);

    /* when we pause the timer once then its ref.current value
    is not null its value is soothing else so when we try
    to re-start the timer it will not work because if ref.current value
    is not null the startFunction is simply returning so we are not able to
    get desire thing because of that we are sating  //**ref.current value to null
    so that statFunction will work soothly after pressing pause button
    */
    ref.current = null;
  };

  const resetStopwatch = () => {
    pauseStopwatch();
    setTimer(0);
  };

  //   split

  const splitTime = () => {
    setSplits((prevSplits) => [...prevSplits, formatTimeToString(timer)]);
  };

  return (
    <>
      <h1>{formatTimeToString(timer)}</h1>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={pauseStopwatch}>Pause</button>
      <button onClick={resetStopwatch}>Reset</button>

      {/* split */}
      <button onClick={splitTime}>Split</button>
      {splits.length > 0 && (
        <>
          <h1>Splits</h1>
          <ol>
            {splits.map((split, index) => (
              <li key={index}>{split}</li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};
