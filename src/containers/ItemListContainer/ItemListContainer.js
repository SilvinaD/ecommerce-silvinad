import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../../components/ItemList/ItemList';


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} =useParams()

        useEffect(() => {

            const db = getFirestore() 
            const queryCollection = collection (db, 'Products') 

            getDocs(
                categoryId
                ? query(queryCollection, where ('category', '==', categoryId)) 
                : queryCollection

            )
                .then ((resp) => { 
                    setItems (resp.docs.map((item) => ({ id: item.id, ...item.data() })))
                    setLoading (false) }
                )
                .catch((err) => console.log(err))
                .finally(setLoading(true))
            
        }, [categoryId]) 

        
    return (

        <div id='contenedor'>
            
            {loading ?
                <ThreeDots
                height="100"
                width="100"
                color='orange'
                ariaLabel='loading'
              />
            
                :
                <ItemList items={items} /> }
        </div>
    );
}

export default ItemListContainer;


