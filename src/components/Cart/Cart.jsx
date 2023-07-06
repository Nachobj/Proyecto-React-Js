import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import'./Cart.css';

const Cart = () => {
    const {cart, clearCart,} = useContext(CartContext);

    const totalCantidad = cart.reduce((total, producto) => total + producto.quantity, 0);

    const total = cart.reduce((total, producto) => total + (producto.item.precio * producto.quantity), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/'>
                    <button>Seguir comprando</button>
                </Link>
            </>
        )
    }
  return (
    <div className="containerCart">
        {cart.map(producto => <CartItem key={producto.id} {...producto}/>)}
        <h3>Cantidad total: {totalCantidad}</h3>
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <Link to={'/checkout'}>
            <button>Finalizar compra</button>
        </Link>
    </div>
  )
}

export default Cart;