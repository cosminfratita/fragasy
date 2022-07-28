// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es: ${quantity}`)
  }


  return (
    <div className="App">
  
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a su perfumeria online'/>
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
