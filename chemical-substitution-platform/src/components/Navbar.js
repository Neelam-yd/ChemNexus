// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">ChemNexus</a>
      <div className="collapse navbar-collapse">
        <form className="form-inline mx-auto">
          <input
            className="form-control"
            type="search"
            placeholder="Search chemicals..."
            aria-label="Search"
          />
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">FAQ</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary">Log In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
