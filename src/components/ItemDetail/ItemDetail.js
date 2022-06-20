import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { useContext } from 'react'
//import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {

  const { stock } = item
  const {AddToCart} = useContext(CartContext)

  const onAdd = (counter) => {
    AddToCart (item, counter) 
    };

  return (
    <MDBCard style={{ maxWidth: '540px', margin: 'auto' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>
            {item.description}
            </MDBCardText>
            <MDBCardText>
            <small className='text-muted'> {item.price}</small>

                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    <h2> {stock} Available </h2>

             </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
export default ItemDetail

/*      
                    <Link to= '/Cart'>
                      <button className="btn btn-primary">Go to cart</button>
                    </Link> */