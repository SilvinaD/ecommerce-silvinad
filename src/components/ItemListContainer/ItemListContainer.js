import { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../ItemList/ItemList';
//import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch() //llamada a la api
            .then((resp) => {
                setItems(resp)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

   // console.log(items)

    return (
        <div>

            {loading ?
                <h2>Loading...</h2>
                :
                ItemList(items)}
        </div>
    );
}

export default ItemListContainer;


//function ItemListContainer() {
//    return(

//        <h1>Aca va el catalogo</h1>

//    )
//}

//const ItemListContainer = ({greeting}) => {
   
//    return (
        
//            <h2>{greeting}</h2>
      
//    );
//}

//export default ItemListContainer;