import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/index'
//import ItemListContainer from './containers/ItemListContainer/index';

function App() {
  return (
    <div>
      <NavBar/>
      {/*<ItemListContainer mensaje='BIENVENIDOS'/>*/}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
