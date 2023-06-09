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
    // console.log("Productos agregados:" + cantidad);

    const item = {id, nombre, precio};
    addItem(item, cantidad);
  }

  return (
    <div className='containerItem'>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>ID: {id}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga saepe minima reiciendis voluptas earum ipsa impedit tempore porro dicta rem sed sapiente alias aut, quae at numquam recusandae vel nesciunt.</p>
      <img src={img} alt={nombre} />
      {

      }
      {
        añadirCantidad > 0 ? (<Link to={"/cart"}>Finalizar compra</Link>) : (<ItemCount inicial={1} stock={stock} añadir={cantidad}/>)
      }
    </div>
  )
}

export default ItemDetail;