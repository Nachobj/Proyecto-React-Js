import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/categoria/:idCat' element={ <ItemListContainer/> }/>
            <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
            <Route path='*' element={<h2>Sitio en mantenimiento</h2>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;