import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export const TodoItem = ({ todo, onDelete, onStatus, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  let [title, setTitle] = useState(todo.title);
  let [desc, setDesc] = useState(todo.description);
  let completedBtnVal = "Completed";
  let statusVal = "Not Completed";
  if (todo.completed) {
    completedBtnVal = "Not Completed";
    statusVal = "Completed";
  }
  // geting data on clicking edit
  const handleEditChanges = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChanges = (e) => {
    setDesc(e.target.value);
  };

  // button functionality
  let handleDelete = () => {
    onDelete(todo.id);
  };
  let handleStatus = () => {
    onStatus(todo.id);
  };
  const handleEdit = (e) => {
    if (e.target.innerText === "Edit") {
      e.target.innerText = "Save";
      setIsEditing(true);
    } else {
      e.target.innerText = "Edit";
      setIsEditing(false);
      onEdit({ id: todo.id, title ,desc});
    }
  };
  return (
    <tr>
      <td>
        {isEditing ? (
          <input type="text" value={title} onChange={handleEditChanges} />
        ) : (
          <input type="text" value={todo.title} readOnly />
        )}
      </td>
      <td>
        {isEditing ? (
          <input type="text" value={desc} onChange={handleDescChanges} />
        ) : (
          <input type="text" value={todo.description} readOnly />
        )}
      </td>
      <td>{statusVal}</td>
      <td>
        <button onClick={handleStatus}>{completedBtnVal}</button>
      </td>
      <td>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
