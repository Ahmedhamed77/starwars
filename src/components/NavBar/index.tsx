import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './navbar.css';
export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">Star Wars</div>
      <div className="navbar__item">
        <Link to="/">Tacos</Link>
      </div>
      <div className="navbar__item">Favorite</div>
    </header>
  );
};
