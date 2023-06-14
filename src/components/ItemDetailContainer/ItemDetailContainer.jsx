import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {db} from '../../services/config';
import {getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [juego, setJuego] = useState(null);
    const {idItem} = useParams();

    useEffect (() => {
      const nuevoDoc = doc(db, "Productos", idItem);

      getDoc(nuevoDoc)
        .then(res => {
          const data = res.data();
          const nuevoProducto = {id:res.id, ...data}
          setJuego(nuevoProducto);
        })
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <div>
      <ItemDetail {...juego}/>
    </div>
  )
}

export default ItemDetailContainer;