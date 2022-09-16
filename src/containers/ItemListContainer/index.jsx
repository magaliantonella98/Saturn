import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import products from '../../components/utils/datos';
import customFetch from '../../components/utils/promesa';


const ItemListContainer = () => {
  const [datos, setDatos] = useState ([]);
  const {idCategory} = useParams();

  useEffect(()=>{
    if (idCategory) {
      customFetch(2000, products.filter(item => item.category === parseInt(idCategory)))
        .then(resolve=> setDatos(resolve))
        .catch(err=> console.log(err))
    } else{
      customFetch(2000, products)
        .then(resolve => setDatos(resolve))
        .catch(err=> console.log.log(err))
    }
      
    }, [idCategory]);
    return(
      <ItemList items={datos}/>
    );
  }

export default ItemListContainer;