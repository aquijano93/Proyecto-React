import './ItemCart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemCart = ({id, name, quantity, price}) => {

    const {removeItem } = useContext(CartContext)
    
    const handleRemove = (id) => {removeItem(id)}

    return (
        <article className='CartItem'>
            <header>
                <h2 className='h2'>
                    {name}
                </h2>
            </header>
            <section>
                <p className='p'>
                    Cantidad: {quantity}
                </p>
                <p className='p'>
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='footer'>
                <p className='p'>
                     Subtotal: ${price * quantity}
                </p>

                <button className='myBtn btn btn-danger btn-sm mx-auto' onClick={() => handleRemove(id)}>🗑</button>
            </footer>
        </article>
    )
}

export default ItemCart 
