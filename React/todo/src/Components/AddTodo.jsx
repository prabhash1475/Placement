import { useState } from "react";

export const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />{" "}
      <button type="button" onClick={onClick}>
        ADD
      </button>
    </>
  );
};
