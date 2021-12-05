import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MASS
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>MASS © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;