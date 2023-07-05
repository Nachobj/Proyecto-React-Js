import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({inicial, stock, añadir}) => {
    const [count, setCount] = useState(inicial);
    // const [color, setColor] = useState("black");

    // useEffect( () => {
    //     document.title = `Contador: ${count}`;

    //    if(count > 5) {
    //         setColor("blue")
    //    } else {
    //         setColor("yellow")
    //    }

    // }, [count])

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

    // const agregarProducto = () => {
    //     console.log(`Agregado ${count} productos`);
    // }

  return (
    <>
        <div className="containerCount">
            <button onClick={ eliminarProducto }> - </button>
            <strong>{count}</strong>
            <button onClick={ sumarProducto }> + </button>
            <br /><br />

        </div>
        <div className="containerButton">
            <button className="btnGamer" onClick={() => añadir(count)}>Agregar producto</button>
        </div>
    </>
  )
}

export default ItemCount;