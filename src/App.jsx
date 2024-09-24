import './App.css'
import { TodoForm } from './components/TodoForm.jsx';
import { TodoList } from './components/TodoList.jsx';

function App() {
  return (
    <>
      <h1>Todo testing</h1>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default App
