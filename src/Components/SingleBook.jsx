import { useState } from 'react';
import { Card } from 'react-bootstrap';
import AddComment from './AddComment';

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  const [selected, setSelected] = useState(false);

  // Gestisce il click sul libro per selezionarlo
  const handleClick = () => {
    setSelected(!selected);
    changeSelectedBook(book.asin);  // Assicurati che 'asin' sia passato correttamente
  };

  return (
    <>
      <Card
        onClick={handleClick}
        style={{
          border: selectedBook === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>

      {/* Passa correttamente l'ASIN a AddComment */}
      {selected && <AddComment asin={book.asin} />}
    </>
  );
};

export default SingleBook;
