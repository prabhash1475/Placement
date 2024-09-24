import { useRef, useState } from "react";

export const UseRef = () => {
  const [timer, setTimer] = useState(0);
  const ref = useRef(null);

  const startTimer = () => {
    if (ref.current != null) return;
    ref.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setTimer(0);
    // ref.current = null;
  };
  console.log(ref);
  return (
    <>
      <h1>Timer: {timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};
