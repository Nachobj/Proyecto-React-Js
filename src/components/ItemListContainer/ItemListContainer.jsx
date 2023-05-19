import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getVideojuegos, getCategoriaJuego } from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [videojuegos, setVideojuegos] = useState([]);
  const {idCat} = useParams();

    useEffect(() => {
      const funcionJuegos = idCat ? getCategoriaJuego : getVideojuegos;

      funcionJuegos(idCat)
        .then(res => setVideojuegos(res))
        .catch(error => console.log(error))
    }, [idCat])

  return (
    <>
        <h2 style={{textAlign: "center"}}>Videojuegos</h2>
        <ItemList videojuegos={videojuegos}/>
    </>
  )
}

export default ItemListContainer;