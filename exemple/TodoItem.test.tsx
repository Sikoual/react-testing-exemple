import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import '@testing-library/jest-dom';

describe('TodoItem', () => {
  it('renders todo text and delete button', () => {
    render(<TodoItem todo="Test Todo" onDelete={() => {}} onEdit={() => {}} />);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByTestId('delete')).toBeInTheDocument();
    expect(screen.getByTestId('edit')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(<TodoItem todo="Test Todo" onDelete={mockOnDelete} onEdit={() => {}} />);

    fireEvent.click(screen.getByTestId('delete'));
    expect(mockOnDelete).toHaveBeenCalled();
  });

  it('calls onEdit when edit button is clicked', () => {
    const mockOnEdit = jest.fn();
    render(<TodoItem todo="Test Todo" onDelete={() => {}} onEdit={mockOnEdit} />);

    fireEvent.click(screen.getByTestId('edit'));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Edited Todo' } });
    fireEvent.click(screen.getByText('Save'));

    expect(mockOnEdit).toHaveBeenCalledWith('Edited Todo');
  });
});