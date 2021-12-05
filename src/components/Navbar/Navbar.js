import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from './../Button/Button';

import './Navbar.css';

const Navbar = () => {

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MASS
            <i className="fab fa-typo3" />
          </Link>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;
