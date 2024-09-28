import TodoItem from './TodoItem';

export default function TodoList({ todos, onDeleteTodo, onEditTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDeleteTodo(index)}
          onEdit={(newTodo) => onEditTodo(index, newTodo)}
        />
      ))}
    </ul>
  );
}