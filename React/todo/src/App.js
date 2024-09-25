import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Components/Todo";
import { Deposit } from "./Components/Deposit";
import { Getpost } from "./day7/Getpost";
import { Useeffect } from "./day7/Useefferct";
import { SmallTimer } from "./day7/SmallTimer";
import { useState } from "react";
import { UseRef } from "./day8/UseRef";
import { Stopwatch } from "./day8/Stopwatch";
import { StopwatchDicent } from "./day8/StopwatchDicent";

function App() {
  // const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Deposit /> */}
      {/* <Getpost /> */}
      {/* <Useeffect /> */}

      {/* {showTimer && <SmallTimer />} */}
      {/* <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}{" "}
      </button> */}
      {/* day8 */}
      {/* <UseRef /> */}
      {/* <Stopwatch /> */}
      <StopwatchDicent />
    </div>
  );
}

export default App;
