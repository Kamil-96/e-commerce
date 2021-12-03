import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({children}) => (
  <div className={styles.root}>
    <Header />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
