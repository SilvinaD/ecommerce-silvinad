import {useState} from "react";

    const ItemCount= ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial)

    const Increment = () => {
        if(counter < stock)
            setCounter(counter + 1)
        }
        
    const Decrement = () => {
        if(counter > initial) 
            setCounter(counter - 1)
        }

    const Reset = () => {
            setCounter(1)
        }
    
    const addCounter = () => {
        console.log(`Confirm quantity: ${counter}`)
        onAdd(counter)
      }
      
    return(
        <div>
            <p>Select quantity</p>
            <div>
                <p> Amount: {counter}</p>
                <button onClick={Increment} > + </button>
                <button onClick={Reset} > Reset </button>
                <button onClick={Decrement} > - </button>
            </div>
            <button onClick={addCounter} >Add to Cart</button>
        </div>
    )
}

export default ItemCount;