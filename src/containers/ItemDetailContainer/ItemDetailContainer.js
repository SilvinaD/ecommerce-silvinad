import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
//import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom"
//import { getOverlayDirection } from "react-bootstrap/esm/helpers"
import { doc, getDoc, getFirestore } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

/* La reemplazo
  useEffect(() => {
      getFetch(id)
          .then((resp) => setItem(resp))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
  }, [id]) */

  useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'items', id)
        getDoc(queryItem) //promesa
        .then(resp => setItem ( { id: resp.id, ...resp.data()} ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
  }, [id]) 

  return (
      
      <div id='contenedor'>

          {loading ?
              <h2>Loading...</h2>
              :
              <ItemDetail item={item} />
              }
      </div>  
  )
}

export default ItemDetailContainer