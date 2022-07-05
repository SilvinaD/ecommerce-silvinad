import { createContext, useContext, useState } from "react"

export const CartContext = createContext([])
export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [CartList, setCartList] = useState([])

    const AddToCart = (item, counter) => {
      let product = { item, counter };
  
      let auxCart = [];
  
      if (IsInCart(item.id)) {
        product = CartList.find(e => e.item.id === item.id);
        product.counter += counter;
        auxCart = [...CartList];
      } else {
        auxCart = [product, ...CartList];
      }

      setCartList(auxCart);
    };


    const DelItem = (id) => {
      const items = CartList.filter((product)=> product.item.id !== id)
      return setCartList(items)
    }

    const IconCart = () => {
      return CartList.reduce((acum, i)=> acum + i.counter, 0)
    }

    const PriceTotal = () => {
      return CartList.reduce((acum, i) => acum + i.counter * i.item.price, 0)
    }

    const EmptyCart = () =>{
      return setCartList([])
    }

    const IsInCart = (id) => {
      return CartList && CartList.some((i) => i.item.id === id)
    }

  return (
    <CartContext.Provider value={{AddToCart, CartList, EmptyCart, DelItem, PriceTotal, IconCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
