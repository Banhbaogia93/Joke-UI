import { render, screen } from '@testing-library/react';
import Quotes from './';

test('renders learn react link', () => {
  render(<Quotes />);
  const text = screen.getByText(/Peace begins with a smile/i);
  expect(text).toBeInTheDocument();
});
