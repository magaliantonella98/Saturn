import {useEffect, useState} from 'react';
import ItemDetail from '../../components/ItemDetail/index';
import customFetch from '../../components/utils/promesa';
import products from '../../components/utils/datos';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() =>{
      customFetch(2000, products[1])
        .then(resolve => setDato(resolve))
        .catch(err=> console.log.log(err))
    }, []);
    
    return(
       <ItemDetail items={dato}/>
        
      );
}

export default ItemDetailContainer;