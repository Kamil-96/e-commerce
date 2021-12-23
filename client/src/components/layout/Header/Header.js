import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.logoWrapper}>
        <Link to='/' className={styles.logo}>
          <span>Exceptional Shop</span>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink className={styles.link} exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} exact to='/cart'>
              Cart
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
