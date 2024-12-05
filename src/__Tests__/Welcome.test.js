
import { render, screen } from '@testing-library/react';
import Welcome from '../Components/Welcome';

describe('Welcome Component', () => {
  test('renders Welcome component correctly', () => {
    render(<Welcome />);
    const welcomeText = screen.getByTestId('welcome-text');
    expect(welcomeText).toBeInTheDocument();
  });
});
