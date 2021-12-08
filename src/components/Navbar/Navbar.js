import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

  return <Fragment>
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src="logo192.png" alt="Home" width="80" height="80" style={{ paddingRight: "10px" }} />
          MASS
        </Link>
      </div>
    </nav>
  </Fragment>
}

export default Navbar;
