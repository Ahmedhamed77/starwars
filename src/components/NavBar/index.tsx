import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <h2 className='header-nav'>Star Wars</h2>
      </div>
     
        <div className='links'>
        <Link className='navbar__item' to="/">Home</Link>
        <Link className='navbar__item' to="/favorite">Favorite</Link>
      </div>
    </header>
  );
};
