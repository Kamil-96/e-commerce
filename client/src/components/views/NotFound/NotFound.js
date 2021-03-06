import React from 'react';

import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

import Button from '../../common/Button/Button';

const NotFound = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Page not found</h2>
    <Link to='/'>
      <Button>Return to the homepage</Button>
    </Link>
  </div>
);

export default NotFound;
