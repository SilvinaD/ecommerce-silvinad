import {useState} from "react"
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore"
import Swal from 'sweetalert2'

import {UseCartContext} from "../../context/CartContext"
import CartItem from "./CartItem"


  const Cart = () => {

    const {CartList, EmptyCart, PriceTotal, IconCart} = UseCartContext()
    const [order, setOrder] = useState(false)
  
    const createOrder = () => {

        const db = getFirestore() 
        const queryCollection = collection(db, "orders")
        const total = PriceTotal()

        const user = {nombre: "Silvina Donvito", email: "silvina1@gmail.com", phone: "54112584691"}

        const order = {user, CartList, total, created_at: serverTimestamp()}

        const request = addDoc(queryCollection, order)

        request
            .then((resp) => {
              setOrder(resp.id)
              Swal.fire("Your purchase was succesful!", 'Order number:  ' + resp.id,  'success');

            }) 
            .catch((error) => {
                console.log("An error ocurred: " + error)
            })
            .finally((resp)=> {
                EmptyCart();
            })
    }

    if (CartList.length < 1) {

      return (
        <div>
          <h4>There are no products in the cart</h4>

          <Link to={"/"} >
            <Button variant='outline-dark' size='lg' > Go Shop </Button>
          </Link>
        </div>
      )

  } else {

      return (
          <div>
              <h1>The Cart</h1>
              
              {CartList.map((i) => <CartItem key={i.item.id} item ={i.item} counter= {i.counter}/>)} 
              <p>Total item {IconCart()} </p>
              <p>Total amount {PriceTotal()} </p>
                   
              <div>
              <button onClick={EmptyCart}>Clean Cart</button>
              <button onClick={createOrder}>Confirm order</button>
              </div>
          </div>
      );
  }
};

export default Cart;