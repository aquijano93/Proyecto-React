import './Item.css'
import { useNavigate } from "react-router-dom";

const Item = ({id, name, img, category, price }) => {
    const navigate = useNavigate();
    return (
        <div className="col-4 mt-5">
            <li id="itemCard">
            <img src={img} className="card-img rounded-4" alt={name} />
            <p>Producto: {name}</p>
            <p>USD ${price}</p>
            <button className="btn btn-danger btn-sm mx-auto" onClick={() => navigate(`/detail/${id}`)}>Detalle</button>
            </li>
        </div>
    )
}   

export default Item

