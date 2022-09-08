import {useEffect, useState} from 'react'
//import ItemCount from '../ItemCount/ItemCount';
import customFetch from '../utils/customFetch'


const dataFromBD = [];

const ItemListContainer = () => {
  const [data, setData] = useState ([]);

  useEffect(() =>{
    customFetch(2000, dataFromBD)
      .then(datos => setData(dataFromBD));
  }, []);
  return(
    <>
    </>
  );
  





 /* const onAdd = (count) => {
    alert("Seleccionaste " + count +" items");
  }
  return (
    <ItemCount stock ={10} initial={1} onAdd={onAdd}/>
  );*/
}

export default ItemListContainer;