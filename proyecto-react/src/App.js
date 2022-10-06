import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCounter/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer 
      style={{  color:'lightgreen',
                fontFamily:'monospace',
                fontSize:'30px',
      }}
      >
        Welcome!
      </ItemListContainer>
      <Counter />
    </div>
  );
}

export default App;
