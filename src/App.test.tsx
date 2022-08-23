import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kalkulator Sederhana/i);
  expect(linkElement).toBeInTheDocument();
});
