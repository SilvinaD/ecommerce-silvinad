import { UseCartContext } from '../../context/CartContext'

const CartItem = ({ item, counter }) => {
    const { DelItem } = UseCartContext()
    const { title, id } = item

  return (
    <div>
        <h3>{ title }</h3>
        <p>{ counter }</p>
        <button onClick={ () => DelItem (id) }>Delete Item</button>
    </div>
  )
}

export default CartItem;