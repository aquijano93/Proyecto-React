import Item from "../Item/Item"

const ItemList = ({ products, setPage }) => {
    //listar

    //map transformando los productos en componentes Item
    return (
        <div className="list-group">
            { products.map(prod => <Item key={prod.id} {...prod} setPage={setPage}/>)}
        </div>
    )
}

export default ItemList