import { useState } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

const SingleBook = (props) => {
  
  const [selected, setSelected] = useState(false);

  
  const handleClick = () => {
    setSelected(!selected);
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        style={{
          border: props.selectedBook === props.book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
      
      {selected && <CommentArea asin={props.book.asin} />}
    </>
  );
};

export default SingleBook;
