import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { ThreeDots } from  'react-loader-spinner'

import ItemDetail from "../../components/ItemDetail/ItemDetail"


  const ItemDetailContainer = () => {

      const [item, setItem] = useState([])
      const [loading, setLoading] = useState(true)
 
      const {id} = useParams()

      useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'Products', id)
        
        getDoc(queryItem) 
        .then(resp => { setItem ( {id: resp.id, ...resp.data()} ) 
                      setLoading (false)}) 
        .catch(err => console.log(err))
        .finally(setLoading(true))
        
  }, [id]) 

  return (
      
      <div>
            {loading ?
                 <ThreeDots
                 height="100"
                 width="100"
                 color='orange'
                 ariaLabel='loading'
                 />
                :
                <ItemDetail item={item}/>
                 }
      </div>  
  )
}

export default ItemDetailContainer