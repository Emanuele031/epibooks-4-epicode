import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ asin }) => {
  // Inizializza lo stato dei commenti con un ASIN di default
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: asin || '',  // Imposta l'elementId a un valore iniziale o vuoto
  });

  // Usa useEffect per monitorare i cambiamenti dell'ASIN
  useEffect(() => {
    if (asin) {
      setComment((prevComment) => ({
        ...prevComment,
        elementId: asin,
      }));
    }
  }, [asin]);  // L'effetto è dipendente dall'ASIN

  // Verifica se l'ASIN è presente e validato prima di fare qualsiasi cosa
  if (!asin) {
    return <div>ASIN non disponibile. Impossibile inviare il commento.</div>;
  }

  const sendComment = async (e) => {
    e.preventDefault();
    
    // Controlla che l'elementId sia valido
    if (!comment.elementId) {
      alert('ASIN non valido. Non è possibile inviare la recensione senza un ASIN valido.');
      return;
    }

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRkYjY3OWM5MjI4ZDAwMTVmYWQzM2IiLCJpYXQiOjE3MzMxNDYyMzQsImV4cCI6MTczNDM1NTgzNH0.guXLdiLrRlj41ufLjVCC0lcQB9TJ95hXsDvd3YhMlnY', // Sostituisci con il tuo token
          },
        }
      );

      if (response.ok) {
        alert('Recensione inviata!');
        // Resetta il commento una volta inviata la recensione
        setComment({
          comment: '',
          rate: 1,
          elementId: asin,  // Reset con l'ASIN originale
        });
      } else {
        throw new Error('Qualcosa è andato storto');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
