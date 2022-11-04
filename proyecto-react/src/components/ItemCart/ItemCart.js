import './ItemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = ({id, name, quantity, price }) => {
    
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div className=''>
            <table className='table table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>SubTotal</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{price * quantity}</td>
                            <td><button className='btn btn-danger btn-sm mx-auto' onClick={() => handleRemove(id)}>🗑</button></td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default ItemCart 