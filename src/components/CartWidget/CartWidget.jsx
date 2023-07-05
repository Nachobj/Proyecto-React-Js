import './CartWidget.css';
import { BsCartCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext);

    const totalCantidad = cart.reduce((total, producto) => total + producto.quantity, 0);

  return (
    <Link to={'/cart'}>
      <BsCartCheck className='cartIcon cart' />
      {  
        totalCantidad > 0 && <span>{totalCantidad}</span>
      }
    </Link>
  )
}

export default CartWidget;