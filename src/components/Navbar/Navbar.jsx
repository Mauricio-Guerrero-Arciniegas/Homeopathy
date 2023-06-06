import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <h1 className="nav__logo">
          <a href="https://api.whatsapp.com/send?phone=3137675461" className="btn-wsp" target="_blank">
            <img className="btn-wsp" src="./assets/icons/whatsapp.png" alt="" loading="lazy" />
          </a>
          Dr. Mauricio Guerrero R.
        </h1>

        <label htmlFor="menu" className="nav__label">
          <img src="/assets/icons/menu.svg" alt="" className="nav__img" />
        </label>
        <input type="checkbox" id="menu" className="nav__input" checked={menuOpen} onChange={handleMenuClick} />

        <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
          <Link to="/" className="nav__item" onClick={handleLinkClick}>Inicio</Link>
          <Link to="/servicios" className="nav__item" onClick={handleLinkClick}>Servicios</Link>
          <Link to="/enfermedades" className="nav__item" onClick={handleLinkClick}>Enfermedades</Link>
          <Link to="/medicamentos" className="nav__item" onClick={handleLinkClick}>Medicamentos</Link>
          <Link to="/contacto" className="nav__item" onClick={handleLinkClick}>Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
