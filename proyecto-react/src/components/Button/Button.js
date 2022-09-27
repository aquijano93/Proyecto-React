const Button = ({children}) => {
    return (
    <button className="navbar-toggler btn btn-outline-success mx-auto p-2">
        {children}
    </button>
    )
}

export default Button;