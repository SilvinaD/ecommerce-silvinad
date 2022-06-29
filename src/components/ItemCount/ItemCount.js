import { useState } from "react";
const ItemCount  = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    //const [select, setSelect] = useState(true)

    const Increment = () => {
        if(counter < stock)
            setCounter(counter + 1)
        }
        
    const Decrement = () => {
        if(counter > initial) 
            setCounter(counter - 1)
        }
    
   /* const onAdd = () => {
        console.log(`Agregaste ${counter} productos a tu carrito`)
    
    }*/

    const addCounter = () => {
        onAdd(counter)
       // setSelect(false)
      }
      
    return(
        <div>
            <p>Seleccionar cantidad de items</p>
            <div>
                <button onClick={Increment} > + </button>
                <p>{counter}</p>
                <button onClick={Decrement} > - </button>
            </div>
            <button onClick={addCounter} >Add to Cart</button>
        </div>
    )
}

export default ItemCount;