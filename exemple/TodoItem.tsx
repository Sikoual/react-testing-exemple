import React, { useState } from 'react';

export default function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEdit = () => {
    onEdit(editedTodo);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          {todo}
          <i
            className="fa-solid fa-xmark cursor-pointer ml-2 text-red-600"
            data-testid="delete"
            onClick={onDelete}
          ></i>
          <i
            className="fa-solid fa-pen-to-square cursor-pointer ml-2 text-emerald-600"
            data-testid="edit"
            onClick={() => setIsEditing(true)}
          />
        </>
      )}
    </li>
  );
}
