import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../helpers/getFetch';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
//import './ItemListContainer.css';


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} =useParams()


        useEffect(() => {
            const db = getFirestore() // ** conectar a la base de datos
            const queryCollection = collection (db, 'Products') // ** traer de la coleccion Products

            getDocs(
                categoryId
                ? query(queryCollection, where ('category', '==', categoryId)) // ** aquellos que coincidan )
                : queryCollection

            )
                .then ((resp) =>
                    setItems (resp.docs.map((item) => ({ id: item.id, ...item.data() })))
                )
                .catch((err) => console.log(err))
                .finally(setLoading(false))
            
        }, [categoryId]) 

        
    return (

        <div id='contenedor'>
            
            {loading ?
                <h2>Loading...</h2>
                :
                <ItemList items={items} /> }
        </div>
    );
}

export default ItemListContainer;


