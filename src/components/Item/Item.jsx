import './Item.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({id, nombre, precio, img}) => {
  return (
   <div className='listItem'>
    <div className='item'>
    <Link to={`/item/${id}`} className='linkDetail'><Card.Img variant="top" className='imgGame' src={img} /></Link>
      <div className='infoGame'>
        <div className='text'>
          <div className='nameGame'>
            <span>{nombre}</span>
            <p>ID: {id}</p>
          </div>
        </div>
        <div className='priceGame'>$ {precio}</div>
      </div>
    </div>
   </div>
  )
}

export default Item;