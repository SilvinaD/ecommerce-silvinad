import { Button } from 'react-bootstrap'
import { UseCartContext } from '../../context/CartContext'

const CartItem = ({item, counter}) => {
    const {DelItem} = UseCartContext()
    const {title, price, id} = item

  return (
    <div>
        <h3>{title}</h3>
        <p>Price: USD {price * counter}</p>
        <p>Units: {counter}</p>
        <Button variant="secondary" size='sm' onClick={() => DelItem (id)}>Delete Item</Button>
    </div>
  )
}

export default CartItem