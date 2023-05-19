import {useState, useEffect} from 'react'
import { getDetalleJuego } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState(null);
    const {idItem} = useParams();

    useEffect( () => {
        getDetalleJuego(idItem)
            .then(res => setJuego(res))
            .catch(error => console.log(error))
    }, [idItem])
  return (
    <div>
        <ItemDetail {...juego}/>
    </div>
  )
}

export default ItemDetailContainer