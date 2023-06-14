import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({videojuegos}) => {
  return (
    <div className="containerGames">
        {videojuegos.map(game => <Item key={game.id} {...game}/>)}
    </div>
  )
}

export default ItemList;