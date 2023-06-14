import './CartWidget.css';
import { BsCartCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {cart} = useContext(CartContext);

    const totalCantidad = cart.reduce((total, producto) => total + producto.quantity, 0);

    const imgCart = "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1682479682~exp=1682480282~hmac=5aafa27b9a706e3c76820597b217ac613df1f82523fc511d888ce986cc9b7e08";

  return (
    <Link to={'/cart'}>
      <BsCartCheck className='cartIcon cart' />
      {
        totalCantidad > 0 && <span>{totalCantidad}</span>
      }
    </Link>
  )
}

export default CartWidget