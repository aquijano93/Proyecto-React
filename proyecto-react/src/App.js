import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetalContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='/cart' element={ <Cart />}/>
            <Route path='/checkout' element={ <CheckOut />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
