import './ItemListContainer.css'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList' 
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        document.title = 'Listado de productos'
    }, [])

    useEffect(() => {
        setLoading(true)
    
        const collectionRef = categoryId 
            ? query(collection(db, 'allProducts'), where('category', '==', categoryId))
            : collection(db, 'allProducts')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })  
    }, [categoryId])


    if(loading) {
        return (
            <DotSpinner 
                size={40}
                speed={0.9} 
                color="white" 
            />
            
        )
    }
    
    return (
        <div className="container text-center mt-5">
            <h1>{categoryId}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;