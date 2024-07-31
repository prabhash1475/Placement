import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter/Counter";
import { Todo } from "./Components/Todo";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}

export default App;
