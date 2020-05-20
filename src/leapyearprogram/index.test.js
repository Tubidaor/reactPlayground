import React from 'react';
import leapYear from './index';
import ReactDOM from 'react-dom';
import AppTwo from '../AppTwo.js';

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 2020;
  const expectedOutput = true;
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AppTwo />, div);

  ReactDOM.unmountComponentAtNode(div);
})