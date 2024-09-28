import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(todo);
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        name="todo"
        placeholder="enter todo"
        type="text"
        value={todo}
      />
      <button>add</button>
    </form>
  );
}