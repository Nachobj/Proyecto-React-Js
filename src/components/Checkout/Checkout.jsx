import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import './Checkout.css';

const Checkout = () => {
    const {cart, clearCart} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const [mailConfirmacion, setMailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorSubmit = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !mail ||!mailConfirmacion) {
            setError("Debes completar todos los campos");
            return;
        }

        if(mail !== mailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const orden = {
            items: cart.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                quantity: producto.quantity,
            })),
            total: cart.reduce((total, producto) => total + producto.item.precio * producto.quantity, 0),
            nombre,
            apellido,
            telefono,
            mail
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                clearCart();
            })
            .catch((error) => {
                console.log("Error al realizar el pedido", error);
                setError("Ocurrió un error al generar el pedido, intente nuevamente");
            })
    }

  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorSubmit}>
            {cart.map(producto => (
                <div key={producto.item.id}>
                    <p>{producto.item.nombre} x {producto.quantity}</p>
                    <p>Precio: $ {producto.item.precio}</p>
                    <hr />
                </div>
            ))}

            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Teléfono</label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Confirmar Email</label>
                <input type="email" value={mailConfirmacion} onChange={(e) => setMailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}>{error}</p>
            }

            <button className="btnEnd" type="submit">Finalizar pedido</button>

            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de pedido es: {ordenId} </strong>
                )
            }
        </form>
    </div>
  )
}

export default Checkout;
