import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__logo">
          <Link to="/">Jake</Link>
        </h1>
        <ul className="navbar__items">
          <Link to="/" className="navbar__item">
            Home
          </Link>
          <Link to="/About" className="navbar__item">
            About
          </Link>
          <Link to="/Portfolio" className="navbar__item">
            Portfolio
          </Link>
          <Link to="/Contact" className="navbar__item">
            Contact
          </Link>
        </ul>
        <h2 className="navbar__contact-number">
          <FontAwesomeIcon
            className="navbar__mobile-icon"
            icon={faMobileAlt}
          ></FontAwesomeIcon>
          <span className="navbar__number">+639616845614</span>
        </h2>
      </nav>
    );
  }
}

export default Navbar;
