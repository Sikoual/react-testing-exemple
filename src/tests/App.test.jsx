import { render, screen } from '@testing-library/react';
import { it, expect } from '@jest/globals';
import App from '../App';

it('renders app component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo testing/i);
  expect(linkElement).toBeInTheDocument();
});