
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar bg-light fixed-top navbar-dark bg-dark"> 
            <div className="container-fluid">
                <NavLink to='/'>
                    <h3>BluInk Supplies</h3>
                </NavLink>
                <button className="navbar-toggler btn btn-outline-success mx-auto p-2" onClick={() => navigate('/category/Machine/')}>
                    Machines
                </button>
                <button className="navbar-toggler btn btn-outline-success mx-auto p-2" onClick={() => navigate('/category/Needles')}>
                    Needles
                </button>
                <button className="navbar-toggler btn btn-outline-success mx-auto p-2" onClick={() => navigate('/category/Ink')}>
                    Ink
                </button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;
