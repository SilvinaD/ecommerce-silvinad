import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'

import { UseCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({item}) => {

  const {stock}= item
  const {AddToCart}= UseCartContext()

  const onAdd= (counter) => {
    AddToCart (item, counter) 
    }

  return (
    <MDBCard  className="shadow p-3 bg-white" style={{ maxWidth: '650px', margin: '20px', textAlign: 'center'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src= {item.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>
            {item.description}
            </MDBCardText>
            <MDBCardText>
            <small className='text-muted'> USD {item.price}</small>

                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    <h5> {stock} In Stock </h5>

             </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
export default ItemDetail
