import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders App component with Welcome component', async () => {
  await act(async () => {
    render(<App />);
  });
  
  // Check if the main heading is present
  const headingElement = screen.getByRole('heading', { name: /DevOps Portfolio Project/i });
  expect(headingElement).toBeInTheDocument();
  
  // Check if the subtitle is present
  const subtitleElement = screen.getByText(/A Modern React Application with CI\/CD Pipeline/i);
  expect(subtitleElement).toBeInTheDocument();
  
  // Check if the GitHub link is present
  const githubLink = screen.getByRole('link', { name: /View on GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/Ryheembon/Dev-ops.demo');
}); 