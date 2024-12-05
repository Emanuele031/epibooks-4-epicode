
import { render, screen } from '@testing-library/react';
import App from '../App'; 
import SingleComment from '../Components/SingleComment';

describe('SingleComment Component', () => {
  test('no SingleComment instances are present before selecting a book', () => {
    render(<SingleComment />);
  
    const commentInstance = screen.queryByText(/comment/i);
    expect(commentInstance).toBeNull();
  });
});
