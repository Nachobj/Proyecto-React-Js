import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from 'react-bootstrap/Card';
import'./CartItem.css'

const CartItem = ({item, quantity, img, nombre}) => {
    const {removeItem} = useContext(CartContext);

   return (
    <div className="containerCartItem">
        <h4>{item.nombre}</h4>
        <Card.Img variant="top" src={img} />
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
    </div>
  )
}

export default CartItem;