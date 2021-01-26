import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';
import strangerTestData from '../api/strangerTestData';
jest.mock('../api/fetchShow');

test('Episodes renders without errors', () => {
  const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);

  rerender(<Episodes episodes={strangerTestData._embedded.episodes} />);

  const episodes = getAllByTestId(/episode/i);
  expect(episodes).toHaveLength(3);
});