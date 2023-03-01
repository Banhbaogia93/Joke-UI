import { render, screen } from '@testing-library/react';
import Footer from './';

test('renders footer', () => {
  render(<Footer />);
  const text = screen.getByText(/Copyright 2021 HLS/i);
  expect(text).toBeInTheDocument();
});
