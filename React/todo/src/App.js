import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Components/Todo";
import { Deposit } from "./Components/Deposit";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Deposit />
    </div>
  );
}

export default App;
