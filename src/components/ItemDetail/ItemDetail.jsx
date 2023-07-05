import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [añadirCantidad, setAñadirCantidad] = useState(0);

  const {addItem} = useContext(CartContext);

  const cantidad = (cantidad) => {
    setAñadirCantidad(cantidad);

    const item = {id, nombre, precio};
    addItem(item, cantidad);
  }

  return (
    <div className='product-card'>
      <div className="product-image">
        <img src={img} alt={nombre}/>
      </div>
      <div className="product-details">
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      {

      }
      <div className="containerButton">
      {
        añadirCantidad > 0 ? (<Link to={"/cart"}><button>Finalizar compra</button></Link>) : (<ItemCount inicial={1} stock={stock} añadir={cantidad}/>)
      }
      </div>
    </div>
  )

}
export default ItemDetail;