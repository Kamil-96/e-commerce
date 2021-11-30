import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Component = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="px-3 fixed-top">
      <Link to="/">
        <span className={styles.logo}>Exceptional Jeans Shop</span>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem className={styles.navItem}>
            <NavLink className={styles.navLink} exact to="/">Home</NavLink>
          </NavItem>
          <NavItem className={styles.cartWrapper}>
            <NavLink exact to="/cart" className={`${styles.link} ${styles.navLink}`} >Cart</NavLink>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export {
  Component as Header,
  Component as HeaderComponent,
};
