import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      style={{  color:'lightgreen',
                fontFamily:'monospace',
                fontSize:'70px',
      }}
      >
        Welcome!
      </ItemListContainer>
    </div>
  );
}

export default App;
