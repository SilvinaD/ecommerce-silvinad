import Item from '../Item/Item';
//import './ItemList.css'

// ** ItemList es el array mapeado ** //

function ItemList(items){

    return(
    
        items.map((e)=> 
            <Item key={e.id} item={e}/>)
        )
}
export default ItemList;

