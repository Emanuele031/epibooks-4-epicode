
import { render, screen } from '@testing-library/react';
import BookList from '../Components/BookList'; 
import { fantasy } from '../data/fantasy'; 

describe('BookList Component', () => {
  test('renders the correct number of bootstrap cards for each book', () => {
    render(<BookList books={fantasy} />);
  
    const bookCards = screen.getAllByRole('article'); 
    expect(bookCards).toHaveLength(fantasy.length);
  });
});



describe('BookList Filtering', () => {
  test('filters books correctly using the navbar', () => {
    render(<BookList books={fantasy} />);
    
    const filterInput = screen.getByPlaceholderText('Search for a book'); 
    fireEvent.change(filterInput, { target: { value: 'Harry Potter' } });
  
    const filteredBook = screen.getByText('Harry Potter'); 
    expect(filteredBook).toBeInTheDocument();
  });
});
