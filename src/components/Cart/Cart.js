import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { CartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext);

  return (
    <>
    <div>
      {CartList.length < 1 ? (
        <p>Empty Cart</p>
      ) : (
        CartList.map((i) => <CartItem key={i.item.id} item ={i.item} counter= {i.counter }/>)
      )}
    </div>
    
    <button onClick={EmptyCart}>Delete Cart</button>
    <p>Total amount {PriceTotal()} </p>
    {IconCart() < 1? <p> </p>:<p> Item {IconCart()}</p>}
    </>
  );
};

export default Cart;