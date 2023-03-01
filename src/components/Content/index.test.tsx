import { render, screen } from '@testing-library/react';
import Content from './';

test('renders Content component', () => {
  render(<Content id="JK1" content="this is a joke" />);
  const text = screen.getByText(/this is a joke/i);
  expect(text).toBeInTheDocument();
});
