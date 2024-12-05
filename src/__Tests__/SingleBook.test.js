
import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../Components/SingleBook';
import { fantasy } from '../data/fantasy';

describe('SingleBook Component', () => {
  test('clicking a book changes its border color', () => {
    render(<SingleBook book={fantasy[0]} />);
    const firstBookCard = screen.getByRole('article');
  
    fireEvent.click(firstBookCard);
  
    expect(firstBookCard).toHaveStyle('border: 3px solid red');
  });

  test('clicking a second book resets the border of the first one', () => {
    render(<SingleBook book={fantasy[0]} />);
    const firstBookCard = screen.getByRole('article');
  
    fireEvent.click(firstBookCard);
    expect(firstBookCard).toHaveStyle('border: 3px solid red');
  
    render(<SingleBook book={fantasy[1]} />);
    const secondBookCard = screen.getByRole('article');
    fireEvent.click(secondBookCard);
  
    expect(firstBookCard).toHaveStyle('border: none');
    expect(secondBookCard).toHaveStyle('border: 3px solid red');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../Components/SingleBook';
import { fantasy } from '../data/fantasy';

describe('SingleBook Component', () => {
  test('loads and displays comments for books with reviews', async () => {
    render(<SingleBook book={fantasy[0]} />);
  
    const firstBookCard = screen.getByRole('article');
    fireEvent.click(firstBookCard);
  
    const commentElement = await screen.findByText('Great book!');
    expect(commentElement).toBeInTheDocument();
  });
});
