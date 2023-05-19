import { useRef } from "react"

const UseRef = () => {
    const contadorCarrito = useRef(0);

    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1;
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <h2>Productos en tienda: {contadorCarrito.current}</h2>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}

export default UseRef