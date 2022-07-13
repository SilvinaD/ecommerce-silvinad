import { Link } from "react-router-dom"
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCol } from 'mdb-react-ui-kit'
import { Button } from "react-bootstrap"

function Items ({item}) {
  return (
    <MDBCol className="shadow p-3 bg-white">
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
            <small className='text-muted'>Price: USD {item.price}</small>
               <Link to={`/item/${item.id}`}>
                    <Button variant='outline-info' style= {{marginLeft: '10px'}}> View </Button> {''} 
               </Link>
          </MDBCardFooter>
        </MDBCard>
        </MDBCol>
    
  )
}
export default Items
