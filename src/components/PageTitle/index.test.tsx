import { render, screen } from '@testing-library/react';
import PageTitle from '.';

test('renders learn react link', () => {
  render(<PageTitle />);
  const text = screen.getByText(/A joke a day keeps the doctor away/i);
  expect(text).toBeInTheDocument();
});
