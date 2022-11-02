import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import  ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <ItemCart key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="btn btn-outline-danger mx-auto p-2">Clear Cart</button>
            <button className="btn btn-outline-success mx-auto p-2" onClick={() => navigate('/checkout')}>Buy</button>
        </div>
    )
}

export default Cart