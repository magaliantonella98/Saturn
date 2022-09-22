import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/index';
import './styles.css'



const ItemDetail = ({items}) => {

  const [count, SetCount] = useState(0);
  const addCart = (count) => {
    console.log(count)
    SetCount(count)
  }

  return (
    <div className="card col-md-8">
      <div className="col-md-6">
        <img className='card-img-top' src={items.pictureUrl} alt=""/>
      </div>
      <div className="">
        <div className="card-body">
          <h5 className='card-title'>{items.title}</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur velit explicabo, laborum rem porro, praesentium exercitationem perspiciatis 
            autem earum, corporis ratione veritatis maiores iusto repudiandae. Animi sapiente 
            voluptatibus neque tenetur?</p>
          <h5 className='card-text'>${items.price}</h5>
          <p className='card-text'>Unidades en stock: {items.stock}</p>
        </div>
      </div>
      <div className='count'>
      {count === 0 ? 
        <ItemCount stock ={items.stock} initial={1} onAdd={addCart}/> 
        :
        <Link className='btnAdd btn btn-dark btn=lg' to='../Cart'><p>FINALIZAR COMPRA</p></Link>
      }
    </div>
    </div>
  )
}


export default ItemDetail;