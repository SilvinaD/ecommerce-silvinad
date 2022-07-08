import {Link} from "react-router-dom";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol} from 'mdb-react-ui-kit';

function Items ({item}) {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'key={item.id}>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage 
            src='../assets/images/SkateProd.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.description}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Precio: {item.price}</small>
               <Link to={`/item/${item.id}`}>
                     <button className="btn btn-primary"> Details </button>
               </Link>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    
  );
}
export default Items;
