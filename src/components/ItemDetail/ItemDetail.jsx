import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='containerItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga saepe minima reiciendis voluptas earum ipsa impedit tempore porro dicta rem sed sapiente alias aut, quae at numquam recusandae vel nesciunt.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail;