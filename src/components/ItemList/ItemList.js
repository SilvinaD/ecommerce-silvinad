import Item from '../Item/Item';

function ItemList({items}){

    return(
    
        items.map((e)=> 
            <Item key={e.id} item={e}/>)
        )
}
export default ItemList;

