import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/categoria/:idCat' element={ <ItemListContainer/> }/>
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element= { <Cart/> }/>
            <Route path='/checkout' element= { <Checkout/> }/>
            <Route path='*' element={<h2>Sitio en mantenimiento</h2>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;