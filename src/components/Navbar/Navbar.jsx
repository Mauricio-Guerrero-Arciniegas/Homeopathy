import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <h1 className="nav__logo">Dr. Mauricio Guerrero R.</h1>

        <label htmlFor="menu" className="nav__label">
          <img src="/assets/icons/menu.svg" alt="" className="nav__img" />
        </label>
        <input type="checkbox" id="menu" className="nav__input" />

        <div className="nav__menu">
          <Link to="/" className="nav__item">Inicio</Link>
          <Link to="/servicios" className="nav__item">Servicios</Link>
          <Link to="/enfermedades" className="nav__item">Enfermedades</Link>
          <Link to="/medicamentos" className="nav__item">Medicamentos</Link>
          <Link to="/contacto" className="nav__item">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
