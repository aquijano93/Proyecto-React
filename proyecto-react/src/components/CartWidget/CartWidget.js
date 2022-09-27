import cart from "./Assets/cart4.svg"

const CartWidget = () => {
    return (
        <div>
            <button className="navbar-toggler btn btn-outline-danger mx-auto pt-2 pe-4 me-3"><img src={cart} alt='cart'/></button>
            0
        </div>
    )
}

export default CartWidget