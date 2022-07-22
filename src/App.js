import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Bienvenidos
        </p>
        <button style= {{color: 'red', backgroundColor: 'blue', fontSize: '30px'}}>Button</button>
      </header> */}  
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a su perfumeria online'/>
    </div>
  );
}

export default App;
