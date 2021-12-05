import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkBtnSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkBtnStyle} ${checkBtnSize}`}
        onClick={onClick}
        type={type}
      >{children}</button>
    </Link>
  )
}

export default Button;
