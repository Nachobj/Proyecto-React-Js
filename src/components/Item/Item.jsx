import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardGame'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Nombre: {nombre}</Card.Title>
          <p>Precio: {precio}</p>
          <p>ID: {id}</p>
          {/* <Button variant="warning">
            Detalle del juego
          </Button> */}
          <Link to={`/item/${id}`}>Detalle del juego</Link>
        </Card.Body>
        {/* <ItemCount /> */}
      </Card>
    </div>
  )
}

export default Item;