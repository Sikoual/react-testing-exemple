import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from '../components/TodoForm';
import '@testing-library/jest-dom';

describe('TodoForm', () => {
  it('calls onAddTodo when form is submitted', () => {
    const mockOnAddTodo = jest.fn();
    render(<TodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByPlaceholderText('enter todo');
    const button = screen.getByRole('button', { name: 'add' });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(mockOnAddTodo).toHaveBeenCalledWith('New Todo');
  });
});