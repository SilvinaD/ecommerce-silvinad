import { useState } from "react"
import { Button } from "react-bootstrap"


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
        <div style= {{textAlign: 'center' , margin: '15px'}} >
            <p>Select quantity</p>
            <div style= {{textAlign: 'center' , margin: '15px'}}>
                <p> Units: {counter}</p>
                <Button variant='outline-success' size='sm' onClick={Increment} > + </Button>
                <Button variant='outline-secondary' size='sm' onClick={Reset} > Reset </Button>
                <Button variant='outline-danger' size='sm' onClick={Decrement} > - </Button>
            </div>
            <Button variant='success' size='m' onClick={addCounter} >Add to Cart</Button>
        </div>
    )
}

export default ItemCount