import React from 'react';
import { render, screen } from '@testing-library/react';
import Learn from '../../src/components/Learn';

test('renders learn react link', () => {
  render(<Learn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
