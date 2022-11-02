import './ItemDetail.css'
import ItemCount from '../ItemCounter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {

    const navigate = useNavigate();
    
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {

        const porductToAdd = {
            id, name, price
        }

        addItem(porductToAdd, quantity)
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
            <section className='Info'>
                <p className="Info">
                    Category: {category}
                </p>
                <p className="Info">
                    Description: {description}
                </p>
                <p className="Info">
                    Precie: USD {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
            { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
            { isInCart(id) && <button className="btn btn-success btn-sm mx-auto mb-1 p-1 ms-1" onClick={() => navigate('/cart')}>Done</button>}
            <button className="btn btn-primary btn-sm mx-auto p-1 mb-1 ms-1" onClick={() => navigate('/')}>Keep Shopping</button>
            </footer>
            </div>
        </div>
    )
}


export default ItemDetail