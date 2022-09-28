import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import './styles.css';
import { Link } from 'react-router-dom';

const Cart = () => {
  const ctx= useContext(CartContext);
  return (
    <>
    <div className="">
      <h1>Soy un Carrito</h1>
    </div>
    <div className="d-grid gap-4 d-md-flex justify-content-md-end">
      <Link className='text-decoration-none'to='/'><button className='deleteAll btn btn-dark'>SEGUIR COMPRANDO</button></Link>
      
      <button className='deleteAll btn btn-dark' onClick={ctx.clear}>ELIMINAR TODO</button>
    </div>
    
    {
      ctx.cartList.map(items=> 
      <div className="card">
        <div className="row card-body">
          <div className="col-md-4">
            <img src={items.pictureUrl} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-3">
            <div>
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text">${items.price}</p>
            </div> 
          </div>
          <div className="col-md-2">
            <p className="card-text">Items</p>
          </div>
          <div className="col-md-3">
            <button className='deleteAll btn btn-dark' onClick ={()=>ctx.removeItem (items.id)}>Eliminar</button>
          </div>
      </div>                 
    </div>)
    }
    </>
  );
}
export default Cart;