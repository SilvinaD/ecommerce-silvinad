import { useState } from "react";
import { UseCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import CartItem from "./CartItem";


  const Cart = () => {

    const { CartList, EmptyCart, PriceTotal, IconCart } = UseCartContext();
    const [order, setOrder] = useState(false)
  
    const createOrder = () => {

        const db = getFirestore() // ** conectar a la base de datos
        const queryCollection = collection(db, "orders");

        const user = { nombre: "Silvina Donvito", email: "silvina1@gmail.com", phone: "54112584691" }

        const order = { user, CartList, PriceTotal, created_at: serverTimestamp() }

        const request = addDoc(queryCollection, order)

        request
            .then((resp) => {
                setOrder(resp.id)
                alert("Your purchase was succesful!" + resp.id);

            })
            .catch((error) => {
                console.log(": " + error)
            })
            .finally((resp)=> {
                EmptyCart();
            })
    }


  return (
    <>
    <div>
      {CartList.length < 1 ? ( 
        <p>Empty Cart</p>
      ) : (
        CartList.map((i) => <CartItem key={i.item.id} item ={i.item} counter= {i.counter }/>)
      )}
    </div>
    
    <button onClick={EmptyCart}>Clean Cart</button>
    <p>Total amount {PriceTotal()} </p>
    {IconCart() < 1? <p> </p>:<p> Item {IconCart()}</p>}

    <button onClick={createOrder}>Confirm order</button>
    </>
  );
};

export default Cart;