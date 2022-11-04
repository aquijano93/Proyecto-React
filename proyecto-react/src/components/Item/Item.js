import './Item.css'
import { useNavigate } from "react-router-dom";

const Item = ({id, name, img, price }) => {
    const navigate = useNavigate();
    return (
        <div className="col-4 mt-5 itemCard mx-auto container-fluid d-flex">
            <div className='cards mx-auto p-1'>
            <img src={img} className="cardimg card-img rounded-4 mx-auto " alt={name} />
            <p>Product: {name}</p>
            <p>USD ${price}</p>
            <button className="btn btn-danger btn-sm mx-auto" onClick={() => navigate(`/detail/${id}`)}>Detail</button>
            </div>
        </div>
    )
}   

export default Item

