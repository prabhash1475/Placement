import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Components/Todo";
import { Deposit } from "./Components/Deposit";
import { Getpost } from "./day7/Getpost";
import { Useeffect } from "./day7/Useefferct";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Deposit /> */}
      {/* <Getpost /> */}
      <Useeffect />
    </div>
  );
}

export default App;
