import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading and main landmark', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
  expect(screen.getByRole('main')).toBeDefined();
  expect(screen.getByText(/full stack developer/i)).toBeDefined();
});

test('renders every navigation target as a section', () => {
  const { container } = render(<App />);

  ['home', 'about', 'skills', 'work', 'contact'].forEach((id) => {
    expect(container.querySelector(`section#${id}`)).not.toBeNull();
  });
});


