// import { useState } from "react"

// const ItemCount = () => {
//     const [count, setCount] = useState(1);

//     let stock = 8;

//     const sumarProducto = () => {
//         if(count < stock) {
//             setCount(count + 1);
//         }
//     }

//     const eliminarProducto = () => {
//         if(count > 1) {
//             setCount(count - 1);
//         }
//     }

//   return (
//     <div>
//         <button onClick={eliminarProducto}> - </button>
//         <p>{count}</p>
//         <button onClick={sumarProducto}> + </button>
//     </div>
//   )
// }

// export default ItemCount;


import { useState, useEffect } from "react";

const ItemCount = ({inicial, stock}) => {
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
    <div>
        <h2>Contador</h2>

        <button onClick={ eliminarProducto }> - </button>
        <strong>{count}</strong>
        <button onClick={ sumarProducto }> + </button>
        <br /><br />

        <button onClick={ agregarProducto } id="boton" style={{color: color}} >Agregar producto</button>
    </div>
  )
}

export default ItemCount;