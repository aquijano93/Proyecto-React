import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import  ItemCart from '../ItemCart/ItemCart'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const { cart, clearCart, totalQuantity} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <div> 
            <h1>Your cart is empty...</h1>
            <button className="btn btn-outline-success p-2" onClick={() => navigate('/')}>Go Shop!</button>
            </div>
        )
    }

    return (     
        <div>
            <h1 className="cartTitle">Cart</h1>
            { cart.map(p => <ItemCart key={p.id} {...p}/>) }
            <div className='myBtnCart'>
            <button onClick={() => clearCart()} className="btn btn-outline-danger mx-auto p-2">Clear Cart</button>
            <button className="btn btn-outline-success mx-auto p-2" onClick={() => navigate('/checkout')}>Buy</button>

            </div>
        </div>
    )
}

export default Cart