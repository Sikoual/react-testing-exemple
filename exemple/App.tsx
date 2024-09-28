import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const editTodo = (indexToEdit, newText) => {
    setTodos(todos.map((todo, index) =>
      index === indexToEdit ? newText : todo
    ));
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onEditTodo={editTodo}
      />
    </div>
  );
}