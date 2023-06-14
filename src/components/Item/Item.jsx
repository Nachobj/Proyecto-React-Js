import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardGame'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <p>Precio: $ {precio} ARS</p>
          <p>ID: {id}</p>
          <Link to={`/item/${id}`}>Detalle del juego</Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item;