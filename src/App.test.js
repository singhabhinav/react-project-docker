import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App12 />);
  const linkElement = getByText(/learn1234 react/i);
  expect(linkElement).toBeInTheDocument();
});
