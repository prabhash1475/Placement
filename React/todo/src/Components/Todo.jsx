import { useState } from "react";
import { AddTodo } from "./AddTodo";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toString() + text,
    };

    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  return (
    <>
      <h3>Todo</h3>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
