import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  // Button functionalities
  const handleDeleteTodo = (id) => {
    let dltArray = todos.filter((todo) => todo.id !== id);
    setTodos(dltArray);
    localStorage.setItem("todos", JSON.stringify(dltArray));
  };
  const handleStatusTodo = (id) => {
    let todosArr = todos.map((item) => {
      if (item.id === id) {
        if (item.completed) item.completed = false;
        else item.completed = true;
      }
      return item;
    });
    setTodos(todosArr);
    localStorage.setItem("todos", JSON.stringify(todosArr));
  };
  const handleEditTodo = ({ id, title, desc }) => {
    let todosArr = todos.map((item) => {
      if (item.id === id) {
        item.title = title;
        item.description = desc;
      }
      return item;
    });
    setTodos(todosArr);
    localStorage.setItem("todos", JSON.stringify(todosArr));
  };

  return (
    <>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onStatus={handleStatusTodo}
              onEdit={handleEditTodo}
            />
          ))}
        </tbody>
      </table>
      <div>
        <Link to="/create" className="link">
          <button>Add Todos</button>
        </Link>
      </div>
    </>
  );
};
