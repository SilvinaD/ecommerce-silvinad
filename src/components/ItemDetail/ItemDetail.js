import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ item }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img src={item.image} className="img-fluidw-100" alt="..." />
            </div>
            <div className="col-md-6">
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>{item.price}</h4> 
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    )
}

export default ItemDetail

/*
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Items({item}) {
  return (
    <MDBCard style={{ maxWidth: '540px' }}>
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
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
*/