
import { render, screen } from '@testing-library/react';
import CommentArea from '../Components/CommentArea';

describe('CommentArea Component', () => {
  test('renders CommentArea component correctly', () => {
    render(<CommentArea asin="12345" />);
    const commentArea = screen.getByText(/Recensione/i); 
    expect(commentArea).toBeInTheDocument();
  });
});
