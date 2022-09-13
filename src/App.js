import './App.css';
import NavBar from './components/NavBar';
<<<<<<< HEAD
import ItemDetailContainer from './containers/ItemDetailContainer/index'
//import ItemListContainer from './containers/ItemListContainer/index';
=======
import ItemListContainer from './containers/ItemListContainer/index';
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9

function App() {
  return (
    <div>
      <NavBar/>
<<<<<<< HEAD
      {/*<ItemListContainer mensaje='BIENVENIDOS'/>*/}
      <ItemDetailContainer/>
=======
      <ItemListContainer mensaje='BIENVENIDOS'/>
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9
    </div>
  );
}

export default App;
