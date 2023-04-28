import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1682479682~exp=1682480282~hmac=5aafa27b9a706e3c76820597b217ac613df1f82523fc511d888ce986cc9b7e08"
  return (
    <div className='cart'>
        <img className='imgCart' src={imgCart} alt="Carrito" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget