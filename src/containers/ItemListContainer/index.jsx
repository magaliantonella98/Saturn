import {useEffect, useState} from 'react'
import ItemList from '../../components/ItemList';
//import ItemCount from '../../components/ItemCount/index';
import customFetch from '../../components/utils/promesa';


const ItemListContainer = () => {
  const [datos, setDatos] = useState ([]);

  useEffect(() =>{
    customFetch()
      .then(resolve => setDatos(resolve))
      .catch(err=> console.log.log(err))
  }, []);
  return(
    <ItemList items={datos}/>
  );
  
 /*const onAdd = (count) => {
    alert("Seleccionaste " + count +" items");
  }
  return (
    <ItemCount stock ={10} initial={1} onAdd={onAdd}/>
    
  );*/
}

export default ItemListContainer;