import {Link} from "react-router-dom";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol} from 'mdb-react-ui-kit';

function Items ({item}) {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'key={item.id}>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage 
            src= {item.image}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.description}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Price: U$D {item.price}</small>
               <Link to={`/item/${item.id}`}>
                     <button className="btn btn-primary"> View </button>
               </Link>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    
  );
}
export default Items;
