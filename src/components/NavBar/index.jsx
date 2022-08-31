import React from 'react';
import CartWidgets from '../CartWidgets';
import './styles.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p className="navbar-brand">SATURN STORE</p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page">Inicio</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Productos</p>
              </li>
              <li className="nav-item">
                <p className="nav-link">Contacto</p>
              </li>
            </ul>
          </div>
          <span className="nav-link"><CartWidgets/></span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;