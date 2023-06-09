import { useState } from "react"
import { Button } from "react-bootstrap";

// const BotonCondicional = () => {
//     const [verificado, setVerificado] = useState(false);

//     const habilitarUsuario = () => {
//         setVerificado(true);
//     }

//     const deshabilitarUsuario = () => {
//         setVerificado(false);
//     }


//     return (
//         <>
//             {verificado ? (<button onClick={deshabilitarUsuario}>Cerrar Sesión </button>) : ( <button onClick={habilitarUsuario}>Iniciar Sesión</button>)}
//         </>
//   )
// }

// export default BotonCondicional

//Con un LOGIN:


const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false);

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const deshabilitarUsuario = () => {
        setVerificado(false);
    }

    const guardarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const guardarContraseña = (e) => {
        setPassword(e.target.value);
    }

    const habilitarUsuario = (e) => {
        e.preventDefault();

        //Implemtento lógica de validación que yo quiera:
        if(usuario === "Pepe" && password === "Argento") {
            setVerificado(true);
        } else {
            setUsuario("Fuira sucio");
            setPassword("Adiooos");
        }
    }

  return (
    <>
        {verificado ? (<button onClick={deshabilitarUsuario}>Cerrar Sesión</button>) : (
        <form onSubmit={habilitarUsuario}>
            <label htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" onChange={guardarUsuario} value={usuario}/>

            <label htmlFor="password">Contraseña</label>
            <input type="text" id="password" value={password} onChange={guardarContraseña} />

            <button>Iniciar Sesión</button>
        </form>
        )}
    </>
  )
}


export default BotonCondicional