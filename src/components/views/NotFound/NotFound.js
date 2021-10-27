import React from 'react';

import styles from './NotFound.module.scss';

import { Button } from 'reactstrap';

const Component = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Page not found</h2>
    <Button color="secondary" href="/">Return to the homepage</Button>
  </div>
);

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
