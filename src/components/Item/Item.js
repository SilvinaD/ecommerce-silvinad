//import './Item.css'

/*function Items({item}) {
    return (

        <div className="card m-2" key={item.id}>
            <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Precio: {item.price}</p>
                <a href="#action1" className="btn btn-primary">Detalle del Item</a>
            </div>
        </div>
    )
}

export default Items;

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardOverlay, MDBCardImage } from 'mdb-react-ui-kit';

export default function Items ({item}) {
  return (
    <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
        {item.description}
        </MDBCardText>
        <MDBCardText>Precio: {item.price}</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>
  );
} 

import React from 'react';
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
  export default Items;*/

  import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Items ({item}) {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'key={item.id}>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
         
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>
             {item.description}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Precio: {item.price}</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
  );
}
export default Items;