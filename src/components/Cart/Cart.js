import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";
import Swal from 'sweetalert2';

import {UseCartContext} from "../../context/CartContext";
import CartItem from "./CartItem";


  const Cart = () => {

    const {CartList, EmptyCart, PriceTotal, IconCart} = UseCartContext();
  
    const createOrder = () => {

        const db = getFirestore() 
        const queryCollection = collection(db, "orders")
        const total = PriceTotal()

        const user = {nombre: "Silvina Donvito", email: "silvina1@gmail.com", phone: "54112584691"}

        const order = {user, CartList, total, created_at: serverTimestamp()}

        const request = addDoc(queryCollection, order)

        request
            .then((resp) => {
               Swal.fire("Your purchase was succesful!", 'Order number:  ' + resp.id,  'success');

            }) 
            .catch((error) => {
                console.log("An error ocurred: " + error)
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
        CartList.map((i) => <CartItem key={i.item.id} item ={i.item} counter= {i.counter}/>)
      ) }
    </div>
    
    <button onClick={EmptyCart}>Clean Cart</button>
    <p>Total amount {PriceTotal()} </p>
    {IconCart() < 1 ? <p> </p> : <p> Item { IconCart() } </p>}
    <button onClick={createOrder}>Confirm order</button>

    </>
  );
};

export default Cart;