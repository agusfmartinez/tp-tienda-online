import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tarjeta de producto</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Button variant="primary">AGREGAR CARRITO</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;