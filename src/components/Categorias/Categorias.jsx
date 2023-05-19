import { useState, useEffect } from "react";

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( () =>{
        document.title = `Categoría ${categoria}`;
    }, [categoria])

    const manejadorCategoria = (categoria) => {
        setCategoria(categoria);
    }

  return (
    <div>
        <h2>Categoría de Productos</h2>
        <button onClick={ () => manejadorCategoria("Playstation 5")}>Playstation 5</button>
        <button onClick={ () => manejadorCategoria("Xbox One")}>Xbox One</button>
        <button onClick={ () => manejadorCategoria("PC")}>Pc</button>
        <button onClick={ () => manejadorCategoria("Nintendo")}>Nintendo</button>
    </div>
  )
}

export default Categorias;