import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("test");
  // expect(linkElement).toBeInTheDocument();
  expect(linkElement.textContent).toBe('Hello World');
});
