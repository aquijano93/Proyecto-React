import './Counter.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return(
        <div className='d-flex mt-1 mb-1 p-1'>
            <div className='btn-group px-2 p-2'>
                <div className='btn-group'>
                    <button className="btn btn-outline-info" onClick={decrement}>-</button>
                </div>
                    <h4 className='Number px-2'>{quantity}</h4>
                <div className='btn-group'>
                    <button className="btn btn-outline-info" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className="btn btn-outline-primary px-4 p-2" onClick={() => onAdd(quantity)}>Add to cart</button>
            </div>
        </div>
    )
}
export default ItemCount