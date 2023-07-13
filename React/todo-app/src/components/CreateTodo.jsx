import React from "react";
import { useState } from "react";

export const CreateTodo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [ID, setID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    todos.push({ id: ID, title, description, completed: false });
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(todos);
    alert("Todo created");
  };

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id:</label>
        <input
          type="text"
          id="id"
          onInput={(e) => {
            setID(e.target.value);
          }}
        />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          onInput={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

// export default CreateTodo;
