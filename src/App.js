import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer/index';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer mensaje='BIENVENIDOS'/>
    </div>
  );
}

export default App;
