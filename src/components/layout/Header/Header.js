import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Component = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.root}>
      <Navbar color="dark" dark expand="md" className="px-3 fixed-top">
        <NavbarBrand className={styles.logo} href="/">Exceptional Jeans Shop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className={styles.cartWrapper}>
              <NavLink className={styles.link} href="/cart">Cart</NavLink>
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export {
  Component as Header,
  Component as HeaderComponent,
};
