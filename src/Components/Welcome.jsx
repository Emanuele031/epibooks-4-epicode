// In 'src/Components/Welcome.js'
import { Alert } from 'react-bootstrap';

const Welcome = () => (
  <Alert className="text-center" data-testid="welcome-text">
    <h1>Benvenuti in EpiBooks!</h1>
  </Alert>
);

export default Welcome;
