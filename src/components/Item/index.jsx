import React from 'react';
import './styles.css'

<<<<<<< HEAD
const Item = ({item}) => {
=======
const Item = ({id, title, price, pictureUrl}) => {
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className='card-img-top' src={pictureUrl} alt=""/> 
            <div className="card-body">
<<<<<<< HEAD
                <h5 className='card-title'>{item.title[0]}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 className='card-text'>${item.price}</h5>
            </div>
            <h5 className='card-text'>{item.id}</h5>
=======
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h5 className='card-text'>${price}</h5>
            </div>
            <h5 className='card-text'>{id}</h5>
>>>>>>> 89a18988d4e3b86f3b0e2818631d5931eed63fe9
        </div>
    )
}

export default Item;