import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer mensaje='BIENVENIDOS'/>
      <ItemCount/>
    </div>
  );
}

export default App;
