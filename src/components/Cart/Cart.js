import { useState } from "react"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { Button, Form } from "react-bootstrap"
import Swal from "sweetalert2"

import { UseCartContext } from "../../context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {
  const { CartList, EmptyCart, PriceTotal, IconCart } = UseCartContext()

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function createOrder(e) {
    e.preventDefault()

    let order = {}

    order.buyer = dataForm
    order.total = PriceTotal()
    order.items = CartList.map((cartItem) => {
      
      const id = cartItem.item.id
      const name = cartItem.item.title
      const price = cartItem.item.price * cartItem.counter
      
      return { id, name, price }

    })

    console.log(order)
    const db = getFirestore()

    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order)
      .then((resp) =>
        Swal.fire(
          "Your purchase was succesful!",
          "Order number:  " + resp.id,
          "success"
        )
      )
      .catch((err) => console.log(err))
      .finally(() => {
        EmptyCart()
      })
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  if (CartList.length < 1) {
    return (
      <div>
        <h4>There are no products in the cart</h4>

        <Link to={"/"}>
          <Button variant="danger" size='lm'>
            {" "}
            Go Shop{" "}
          </Button>
        </Link>
      </div>
    )

  } else {
    return (
      <div>
        <h1>Cart</h1>

        {CartList.map((i) => (
          <CartItem key={i.item.id} item={i.item} counter={i.counter} />
        ))}
        <p>Total item {IconCart()} </p>
        <p>Total amount USD {PriceTotal()} </p>

        <div>
          <Button variant="secondary" size='sm' onClick={EmptyCart}>Clean Cart</Button>
          <div className="container py-5">
            <h4>Please, complete this form</h4>
            <Form onSubmit={createOrder}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  required={true}
                  id="name"
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                  required={true}
                  id="phone"
                  name="phone"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required={true}
                  id="email"
                  name="email"
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Confirm order
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart;