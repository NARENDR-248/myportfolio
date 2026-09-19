import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio without crashing', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/narendra/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
