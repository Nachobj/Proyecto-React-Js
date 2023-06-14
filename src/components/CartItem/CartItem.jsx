import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item, quantity}) => {
    const {removeItem} = useContext(CartContext);

   return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${item.precio}</p>
        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
    </div>
  )
}

export default CartItem;