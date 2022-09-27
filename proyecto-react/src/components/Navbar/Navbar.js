import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return (
        <nav className="navbar bg-light fixed-top navbar-dark bg-dark"> 
            <div className="container-fluid">
                BluInk Supplies
                <Button>
                    Home
                </Button>
                <Button>
                    Supplies
                </Button>
                <Button>
                    Contact
                </Button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;