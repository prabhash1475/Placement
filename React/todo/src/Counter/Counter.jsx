import { useState, react } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleColor = () => {
    return count == 1
      ? { backgroundColor: "red", color: "white" }
      : { backgroundColor: "white", color: "black" };
  };

  return (
    <div>
      <h3>Counter {count}</h3>
      <div>
        <button
          onClick={handleDec}
          disabled={count === 1}
          style={handleColor()}
        >
          -
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={handleReset}
          disabled={count === 0}
        >
          Reset
        </button>
        <button onClick={handleInc}>+</button>
      </div>
    </div>
  );
};
