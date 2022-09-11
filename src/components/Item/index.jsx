import React from 'react';
import './styles.css'

const Item = ({id, title, price, pictureUrl}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className='card-img-top' src={pictureUrl} alt=""/> 
            <div className="card-body">
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 className='card-text'>${price}</h5>
            </div>
            <h5 className='card-text'>{id}</h5>
        </div>
    )
}

export default Item;