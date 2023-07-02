import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className={isHome ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to="/">
            Accueil
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
          <Link to="/about">
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;