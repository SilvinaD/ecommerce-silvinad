import { UseCartContext } from '../../context/CartContext'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit'


const CartItem = ({item, counter}) => {
    const {DelItem} = UseCartContext()
    const {title, price, id, image} = item

  return (
    <div>
      <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={ image } fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{ title }</MDBCardTitle>
        <MDBCardText>
          Price: USD {price * counter}
        </MDBCardText>
        <MDBCardText>
          Units: {counter}
        </MDBCardText>
        <MDBBtn color='outline-danger'
 onClick={() => DelItem (id)}>Delete</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default CartItem