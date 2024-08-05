export const TodoItem = ({ id, title, status, handleToggle, handleDelete }) => {
  return (
    <li>
      {title} - {status ? "Completed" : "Not Completed"}{" "}
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};
