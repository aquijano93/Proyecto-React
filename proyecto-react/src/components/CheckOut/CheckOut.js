
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from 'react-router-dom'
import FormCheckOut from '../Form/Form'
import { DotSpinner } from '@uiball/loaders'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [cart, total, clearCart] = useContext(CartContext);
    const [buyerData, setBuyerData] = useState(false)
    const [orderData, setOrderData] = useState({})

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const dataSet = (name, surname, address, phone, email) =>{
        setOrderData({name, surname, address, phone, email})
        setBuyerData(true)
    }

    const createOrder = async () => {
        setLoading(true)

        try {
            const order = {
                buyer: orderData,
                items: cart,
                total: total
            }
            const ids = cart.map(prod => prod.id);
        
            const productsRef = collection(db, 'products');
        
            const productsFromFS = await getDocs(query(productsRef, where(documentId(), 'in', ids))) 
        
            const { docs } = productsFromFS;
        
            const batch = writeBatch(db);
        
            const outOfStock = [];
        
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedTocart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedTocart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        
            if(outOfStock.length === 0 ) 
            {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc (orderRef, order)
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                MySwal.fire({
                    title: <strong>Thanks!</strong>,
                    text: `Your order id is: ${orderAdded.id}`,
                    icon: 'success'
                })

            }
            else 
            {
                MySwal.fire({
                    title: <strong>Oops!</strong>,
                    html: <i>Some products are out of stock!</i>,
                    icon: 'error'
                })
            }
        
        }
        catch(error) 
        {
            MySwal.fire({
                title: <strong>Oops!</strong>,
                html: <i>Something wrong happens!</i>,
                icon: 'error'
            })
        }
        finally 
        {
            setLoading(false)
        }
    }

    if(loading) 
    {
        return (
            <DotSpinner 
                size={40}
                speed={0.9} 
                color="white" 
            />
            
        )
    }

    return (
        <div>
            <h1>CheckOut</h1>
            <FormCheckOut dataSet={dataSet} />
            {buyerData?<button className="submit btn btn-warning mx-1" onClick={createOrder}>Create Order</button> 
            : ""}
        </div>

    )

}

export default CheckOut