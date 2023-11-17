// import necessary react testing library helpers here
import React from 'react';
// import the Counter component here
import Counter from '../components/Counter';
//import the render, firevent, and screen
import {render, fireEvent, screen} from '@testing-library/react'

beforeEach(() => {
  // render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/counter/i)).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText(/0/i)).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText(/\+/i)
  fireEvent.click(button)
  expect(screen.getByText(/1/i)).toBeInTheDocument()
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByText(/-/i)
  fireEvent.click(button)
  expect(screen.getByText(/-1/i)).toBeInTheDocument()
});