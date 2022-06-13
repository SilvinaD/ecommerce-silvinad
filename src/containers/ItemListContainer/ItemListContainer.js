import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
//import './ItemListContainer.css';

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} =useParams()

    useEffect(() => {
        if (categoryId) {
            getFetch()
                .then((resp) => {
                     setItems(resp.filter(item => item.category === categoryId))
                     setLoading(false) 
                })
                .catch(err => console.log(err))
        } else {
            getFetch()
                .then((resp) => {
                    setItems(resp)
                    setLoading(false) 
                })
        }
    }, [categoryId])

   // console.log(items)

    return (

        <div id='contenedor'>
            
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