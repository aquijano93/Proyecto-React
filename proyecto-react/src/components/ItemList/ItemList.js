import Item from "../Item/Item"

const ItemList = ({ products }) => {
    //listar

    //map transformando los productos en componentes Item
    return (
        <div>
            { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}

export default ItemList