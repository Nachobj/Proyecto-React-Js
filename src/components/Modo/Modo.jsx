import './Modo.css';
import { useState } from 'react';

const Modo = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro); // ! invierte el valor de la variable booleana. Si tiene false, pasa a true y viceversa.
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className={estilo}>
        <button onClick={ cambiarModo }> {modoOscuro ? "Claro" : "Oscuro"} </button>
        <h2>Componente Modo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet a nihil, distinctio itaque suscipit provident possimus nulla reprehenderit consequatur, corporis delectus. Mollitia eius blanditiis impedit commodi, eaque similique quo?</p>
    </div>
  )
}

export default Modo