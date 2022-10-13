import './ItemDetail.css'
import ItemCount from "../ItemCounter/Counter";

const ItemDetail = ({ id, name, img, category,description, price, stock}) => {

    const handleOnAdd = (quantity) => {
        const porductOnAdd = {
            id, name, price, quantity
        }
        console.log(porductOnAdd)
    }

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
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: USD {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
            </div>
        </div>
    )
}


export default ItemDetail