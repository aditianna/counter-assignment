// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId('count') ;
  expect(countVar).toHaveTextContent("0");
});


test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId('count');
  const add = screen.getByText('+');
  fireEvent.click(add);
  expect(countVar).toHaveTextContent("1") ;
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countVar = screen.getByTestId('count');
  const minus = screen.getByText('-');
  fireEvent.click(minus);
  expect(countVar).toHaveTextContent("-1") ;
});
