import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createContext } from "react"

import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'


export const AppContext = createContext()

function App() {
  
  return (
    <>
     <CartContextProvider>
     <BrowserRouter>
        <NavBar/>

        <Routes>
           <Route index path='/' element={<ItemListContainer/>} /> 
           <Route index path='/category/:categoryId' element={<ItemListContainer/>} /> 

           <Route path='/item/:id' element={<ItemDetailContainer/>} />
           <Route path="/cart" element={<Cart/>} />

           <Route path={"/404"} element={<NotFound/>} />
           <Route path={"*"} element={<Navigate to="/404" replace />} />
        </Routes>
       
      </BrowserRouter>
      </CartContextProvider>
  
   </>
  );
}

export default App
