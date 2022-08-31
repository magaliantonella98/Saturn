import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer mensaje='BIENVENIDOS'/>
    </div>
  );
}

export default App;
