import {UseCartContext} from '../../context/CartContext'

const CartItem = ({item, counter}) => {
    const {DelItem} = UseCartContext()
    const {title, price, id} = item

  return (
    <div>
        <h3>{title}</h3>
        <p>Price: ${price * counter}</p>
        <p>Units: {counter}</p>
        <button onClick={() => DelItem (id)}>Delete Item</button>
    </div>
  )
}

export default CartItem;