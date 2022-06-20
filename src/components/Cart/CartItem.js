import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = (item) => {
    const {DelItem} = useContext(CartContext)
    const { title, id } = item

  return (
    <div> <h3>{ title }</h3>
    <button onClick={() => DelItem (id)}>Delete Item</button>
    </div>
  )
}

export default CartItem;