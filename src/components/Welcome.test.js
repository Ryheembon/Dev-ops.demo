import { render, screen } from '@testing-library/react';
import { act } from 'react';
import Welcome from './welcome';

test('renders welcome component with correct text', async () => {
  await act(async () => {
    render(<Welcome />);
  });
  
  // Check main heading
  const headingElement = screen.getByText(/DevOps Portfolio Project/i);
  expect(headingElement).toBeInTheDocument();
  
  // Check subtitle
  const subtitleElement = screen.getByText(/A Modern React Application with CI\/CD Pipeline/i);
  expect(subtitleElement).toBeInTheDocument();
  
  // Check feature cards
  const ciCdFeatures = screen.getAllByText(/CI\/CD Pipeline/i);
  expect(ciCdFeatures).toHaveLength(2); // Verify we have exactly 2 instances
  
  // Check if one instance has the rocket emoji
  const hasRocketEmoji = ciCdFeatures.some(element => element.textContent.includes('🚀'));
  expect(hasRocketEmoji).toBe(true);
  
  // Check React feature card
  const reactFeature = screen.getByText(/⚛️ React/i);
  expect(reactFeature).toBeInTheDocument();
  
  // Check GitHub Pages feature
  const githubPagesFeature = screen.getByText(/🎯 GitHub Pages/i);
  expect(githubPagesFeature).toBeInTheDocument();
  
  // Check GitHub link
  const githubLink = screen.getByText(/View on GitHub/i);
  expect(githubLink).toBeInTheDocument();
  expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/Ryheembon/Dev-ops.demo');
}); 