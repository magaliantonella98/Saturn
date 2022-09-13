import React from 'react';
import ItemCount from '../../components/ItemCount/index';
import './styles.css'



const ItemDetail = ({items}) => {
    const onAdd = (count) => {
        alert("Seleccionaste " + count +" items");
      }
    return (
        <div className="card" style={{width: "70rem"}}>
            <img className='card-img-top' src={items.pictureUrl} alt=""/> 
            <div className="card-body">
                <h5 className='card-title'>{items.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 className='card-text'>${items.price}</h5>
                <p className='card-text'>Unidades en stock: {items.stock}</p>
            </div>
            
            <ItemCount stock ={items.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}


export default ItemDetail;