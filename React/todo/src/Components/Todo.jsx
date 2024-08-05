import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toString() + text,
    };

    setTodos([...todos, newTodo]);
    // console.log(todos);
  };

  const handleToggle = (id) => {
    // JAVASCRIPT
    const todoAfterUpdate = todos.map(
      (el) => (el.id === id ? { ...el, status: !el.status } : el)
      // === triple Equal to is mandatory
    );

    // REACT
    setTodos(todoAfterUpdate);
  };
  const handleDelete = (id) => {
    const todoAfterDelete = todos.filter((item) => item.id !== id);
    setTodos(todoAfterDelete);
  };
  return (
    <>
      <h3>Todo</h3>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};
