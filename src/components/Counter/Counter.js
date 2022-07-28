import { useState } from "react";
import './Counter.css'

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
   

    const increment = () => {
        if(count < stock) {
            setCount(count +1)
        }
       
    }

    const decrement = () => {
        if(count > 1){
            setCount(count -1)
        }
       
    }

    return(
        <div className="contador">
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <h6>{count}</h6>
            <button onClick={increment}>+</button> 
        </div>
    )
}

export default Counter