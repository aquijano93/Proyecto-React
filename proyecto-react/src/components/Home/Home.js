import Logo from '../Home/Logo.jpeg';
import './Home.css';

const Home = () =>{
    return (
        <div className="container home" >
            <div className='imgContainer'>
            <h1 className='title'>Welcome to BluInk supplies</h1>
                <img src={Logo} alt="Logo of bluink" className='imgLogo' />
            </div>
        </div>
    )
}

export default Home