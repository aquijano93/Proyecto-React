import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = ({id, name, quantity, category, price }) => {
    
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    return (
        <div>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>SubTotal</th>
                    </tr>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{category}</td>
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