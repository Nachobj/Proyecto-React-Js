import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const {idCat} = useParams();

  useEffect (() => {
    const misProductos = idCat ? query(collection(db, "Productos"), where("idCat", "==", idCat)) : collection(db, "Productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setVideojuegos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCat])

  return (
    <>
      <h2 className='subtitulo'>Tendencias</h2>
      <ItemList className='bgBody' videojuegos={videojuegos}/>
    </>
  )
}

export default ItemListContainer;