import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MASS
            </Link>
          </div>
          <small className='website-rights'>JTP team © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;