import './App.css';
import NavBar from './components/NavBar/NavBar';
//import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { createContext } from "react";
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


export const AppContext = createContext();

function App() {
  //Todo lo que se ve en pantalla - JS parecido a html - Dif claseName y cierre /
  return (
    <>
     <CartContextProvider>
     <BrowserRouter>
        <NavBar/>
        <h2> Aca agregar home </h2>
        <Routes>
           <Route index path='/' element={<ItemListContainer/>} /> 
           <Route index path='/category/:categoryId' element={<ItemListContainer/>} /> 

           <Route path='/item/:id' element={<ItemDetailContainer/>} />
           <Route path="/cart" element={<Cart/>} />
            
           <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
   </>
  );
}

export default App;
