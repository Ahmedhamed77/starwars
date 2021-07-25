import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">
        <h2>Star Wars</h2>
      </div>
      <div className="navbar__item">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar__item">
        <Link to="/favorite">Favorite</Link>
      </div>
    </header>
  );
};
