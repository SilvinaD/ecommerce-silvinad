import {MDBRow} from 'mdb-react-ui-kit'

import Item from '../Item/Item'


function ItemList({items}){

    return(
        <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        
            {items.map((e)=> 
                <Item key={e.id} item={e}/>)
        }
       
        </MDBRow> )
}
export default ItemList

