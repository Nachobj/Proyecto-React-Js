import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// import ItemCount from './components/ItemCount/ItemCount';
// import Categorias from './components/Categorias/Categorias';
// import Button from 'react-bootstrap/Button';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;


{/* <NavBar />
      <ItemListContainer greeting="Bienvenidos a la Tienda Online"/>
      <ItemCount inicial={1} stock={10}/>
      <ItemDetailContainer /> */}