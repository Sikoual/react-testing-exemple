import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList', () => {
  it('renders the correct number of TodoItems', () => {
    const todos = ['Todo 1', 'Todo 2', 'Todo 3'];
    render(<TodoList todos={todos} onDeleteTodo={() => {}} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});