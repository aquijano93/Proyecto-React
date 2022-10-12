import './Item.css'
import { useNavigate } from "react-router-dom";

const Item = ({id, name, img, category, price }) => {
    const navigate = useNavigate();
    return (
        <div className="row list-group list-group-horizontal mt-1 p-4 text-center d-flex justify-content-evenly" id='itemDiv'>
            <li className="col-3 list-group-item" id="itemCard">
            <h3>{category}</h3>
            <img src={img} className="card-img rounded-4" alt={name} />
            <p>Producto: {name}</p>
            <p>USD ${price}</p>
            <button className="btn btn-danger btn-sm mx-auto" onClick={() => navigate(`/detail/${id}`)}>Detalle</button>
            </li>
        </div>
    )
}

export default Item

