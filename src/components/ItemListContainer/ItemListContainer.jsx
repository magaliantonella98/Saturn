import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
  const onAdd = (count) => {
    alert("Seleccionaste " + count +" items");
  }
  return (
    <ItemCount stock ={10} initial={1} onAdd={onAdd}/>
  );
}

export default ItemListContainer;