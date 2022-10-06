import { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Agragar al carrito</button>
        </div>
    )
}

export default Counter