import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders welcome component with correct text', () => {
  render(<Welcome />);
  const headingElement = screen.getByText(/Welcome to My DevOps Demo/i);
  const paragraphElement = screen.getByText(/This is a simple React application with CI\/CD pipeline using GitHub Actions/i);
  
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
}); 