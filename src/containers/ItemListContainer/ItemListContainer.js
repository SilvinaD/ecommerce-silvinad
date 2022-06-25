import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
//import './ItemListContainer.css';


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} =useParams()

   // ** reemplazo **
   /* useEffect(() => {
        getFetch()
            .then((resp) => {
                 setItems(!categoryId ? resp:resp.filter(item => item.category === categoryId))
                 setLoading(false) 
            })
            .catch(err => console.log(err))
            return () =>{
                setLoading(true); }
        }, [categoryId])

    /** useEffect para traer todos los items **/
        useEffect(() => {
            const db = getFirestore() // ** conectar a la base de datos
            const queryCollection = collection (db, 'items') // ** traer de la coleccion items
            getDocs(queryCollection)
            .then (data => setItems(data.docs.map( (item) => ( {id:item.id, ...item.data()})))) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }, []) 
       
        //console.log(items)

    /** useEffect para traer Filtrados **/
        useEffect(() => {
            const db = getFirestore() // ** conectar a la base de datos
            const queryCollection = collection (db, 'items') // ** traer de la coleccion items
            const queryCollectionFilter = query (queryCollection, where ('category', '==', 'Skates' /*categoryId*/), limit(10), orderBy('price', 'asc')) // aquellos que coincidan 

            getDocs(queryCollectionFilter)
            .then (data => setItems(data.docs.map( (item) => ( {id:item.id, ...item.data()})))) 
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }, [categoryId]) 
        
        console.log(items)
        
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