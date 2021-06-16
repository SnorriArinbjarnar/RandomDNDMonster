import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App component correctly', () => {
  const {getByTestId} = render(<App />);
  const container = getByTestId("app-container");
  
  expect(container).toBeInTheDocument();
  
});

// check if correctly populates the dropdown


// check if random monster is the correct type