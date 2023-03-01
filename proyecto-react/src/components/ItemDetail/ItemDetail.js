import './ItemDetail.css'
import ItemCount from '../ItemCounter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {

    const navigate = useNavigate();
    
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const handleOnAdd = (quantity) => {

        const porductToAdd = {
            id, name, price
        }

        addItem(porductToAdd, quantity)
        MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>You added a product to your cart!</i>,
            icon: 'success'
        })
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <div className="cardDetail card mt-5 mb-3">
            <div>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="card-img-top"/>
            </picture>
            <ul className='Info'>
                <li className="Info">
                    <strong>Category:</strong>  {category}
                </li>
                <li className="Info">
                    <strong>Description:</strong> {description}
                </li>
                <li className="Info">
                <strong>Precie: USD</strong> {price}
                </li>
            </ul>           
            <footer className='ItemFooter'>
            { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p className='stockInfo'>Out of stock</p>}
            { isInCart(id) && <button className="btn btn-success btn-sm mx-auto mb-1 p-1 ms-1" onClick={() => navigate('/cart')}>Done</button>}
            <button className="btn btn-primary btn-sm mx-auto p-1 mb-1 ms-1" onClick={() => navigate('/')}>Keep Shopping</button>
            </footer>
            </div>
        </div>
    )
}


export default ItemDetail