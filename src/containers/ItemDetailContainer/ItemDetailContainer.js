import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
//import { getFetch } from "../../helpers/getFetch"
//import { getOverlayDirection } from "react-bootstrap/esm/helpers"
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)
  //const [bool, setBool] = useState(false)

  const {id} = useParams()

  useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'Products', id)
        getDoc(queryItem) //promesa
        .then(resp => setItem ( { id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally(setLoading(false))
        
  }, [id]) 

  return (
      
      <div id='contenedor'>
            {loading ?
                <h2>Loading...</h2>
                :
                <ItemDetail item={item}/>
                 }
      </div>  
  )
}

export default ItemDetailContainer