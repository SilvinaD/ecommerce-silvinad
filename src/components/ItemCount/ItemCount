import { useState } from "react";

function ItemCount ({stock, initial, onAdd}){
    const [counter, setCounter] = useState(initial)
    
    function Increment(){
        if(counter < stock){
            setCounter(counter + 1)
        }else{
            setCounter(counter = stock)
        }
        
    }

    function Decrement(){
        if(counter > 0){
            setCounter(counter - 1)
        }else{
            setCounter(counter = initial)
        }

    }
    
    function onAdd(){
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
   
