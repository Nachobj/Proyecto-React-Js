import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <>
        <header className='navbar'>
            <h1 className='titulo'>Tienda Online</h1>

            <nav>
                <ul>
                    <li>Categoría 1</li>
                    <li>Categoría 2</li>
                    <li>Categoría 3</li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    </>
  )
}

export default NavBar