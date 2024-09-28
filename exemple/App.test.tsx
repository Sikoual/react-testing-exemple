import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.tsx';

describe('App', () => {
  it('renders TodoForm and TodoList', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('enter todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('enter todo');
    const addButton = screen.getByRole('button', { name: 'add' });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('deletes a todo', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('enter todo');
    const addButton = screen.getByRole('button', { name: 'add' });
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByTestId('delete');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
  });

  it('edits a todo', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('enter todo');
    const addButton = screen.getByRole('button', { name: 'add' });
    fireEvent.change(input, { target: { value: 'Todo to edit' } });
    fireEvent.click(addButton);

    const editButton = screen.getByTestId('edit');
    fireEvent.click(editButton);

    const editInput = screen.getByDisplayValue('Todo to edit');
    fireEvent.change(editInput, { target: { value: 'Edited Todo' } });

    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);

    expect(screen.getByText('Edited Todo')).toBeInTheDocument();
    expect(screen.queryByText('Todo to edit')).not.toBeInTheDocument();
  });

  it('renders multiple todos', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('enter todo');
    const addButton = screen.getByRole('button', { name: 'add' });

    ['Todo 1', 'Todo 2', 'Todo 3'].forEach(todo => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(addButton);
    });

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.getByText('Todo 3')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});