import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item, counter }) => {
    const {DelItem} = useContext(CartContext)
    const { title, id } = item

  return (
    <div> <h3>{ title }</h3>
    <p>{counter }</p>
    <button onClick={() => DelItem (id)}>Delete Item</button>
    </div>
  )
}

export default CartItem;