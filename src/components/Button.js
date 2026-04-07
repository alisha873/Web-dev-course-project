import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
  to
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <Link to={to} className={`btn-mobile ${className || ''}`}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  buttonStyle: PropTypes.oneOf(STYLES),
  buttonSize: PropTypes.oneOf(SIZES),
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

Button.defaultProps = {
  type: 'button',
  buttonStyle: 'btn--primary',
  buttonSize: 'btn--medium',
  className: ''
};