import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const CartWidgets = () => {
  return (
    <div>
        <Link className='text-decoration-none'to='/cart'><FontAwesomeIcon className="nav-link" icon={faCartShopping}/></Link>
    </div>
  )
}

export default CartWidgets