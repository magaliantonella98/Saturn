import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/index'
import ItemListContainer from './containers/ItemListContainer/index';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<p>Oops :c</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
