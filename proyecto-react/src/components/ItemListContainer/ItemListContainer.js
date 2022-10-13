import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from '../ItemList/ItemList' 
import { useParams } from 'react-router-dom'
import { DotSpinner } from '@uiball/loaders'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
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
        <div className="container text-center">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;