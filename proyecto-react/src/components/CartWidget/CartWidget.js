import cart from "./Assets/cart4.svg"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)
    const navigate = useNavigate();
    return (
        <div>
            <button to='/cart' className="navbar-toggler btn btn-outline-danger mx-auto pt-2 pe-4 me-3" onClick={() => navigate ('/cart')}><img src={cart} alt='cart'/>
            {totalQuantity}
            </button>
        </div>
    );
}

export default CartWidget