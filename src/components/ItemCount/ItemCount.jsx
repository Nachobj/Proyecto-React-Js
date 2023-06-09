import { useState, useEffect } from "react";
import './ItemCount.css';

const ItemCount = ({inicial, stock, añadir}) => {
    const [count, setCount] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( () => {
        console.log("Se ejecutó el useEffect!")
        document.title = `Contador: ${count}`;

       if(count > 5) {
            setColor("blue")
       } else {
            setColor("yellow")
       }

    }, [count])

    const sumarProducto = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const eliminarProducto = () => {
        if(count > inicial) {
            setCount(count - 1);
        }
    }

    const agregarProducto = () => {
        console.log(`Agregado ${count} productos`);
    }

  return (
    <>
        <div>
            <h2>Contador</h2>

            <button onClick={ eliminarProducto }> - </button>
            <strong>{count}</strong>
            <button onClick={ sumarProducto }> + </button>
            <br /><br />

            {/* <button onClick={ agregarProducto } id="boton" style={{color: color}} >Agregar producto</button> */}
        </div>
        <button onClick={() => añadir(count)}>Agragar producto</button>
    </>
  )
}

export default ItemCount;