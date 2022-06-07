import { useState } from "react";
const ItemCount  = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial)
    
    const Increment = () => {
        if(counter < stock)
            setCounter(counter + 1)
        }
        
    const Decrement = () => {
        if(counter > initial) 
            setCounter(counter - 1)
        }
    
    const onAdd = () => {
        console.log(`Agregaste ${counter} productos a tu carrito`)
    
    }
    return(
        <div>
            <p>Seleccionar cantidad de items</p>
            <div>
                <button onClick={Increment} > + </button>
                <p>{counter}</p>
                <button onClick={Decrement} > - </button>
            </div>
            <button onClick={onAdd} >Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
   
