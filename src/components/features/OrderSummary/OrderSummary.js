import React from 'react';

import styles from './OrderSummary.module.scss';

import { Button, Container} from 'reactstrap';

const Component = () => (
  <Container>
    <div className={styles.wrapper}>
      <h3>Items:</h3>
      <h3>$50</h3>
    </div>
    <div className={styles.wrapper}>
      <h3>Delivery:</h3>
      <h3>$20</h3>
    </div>
    <div className={styles.wrapper}>
      <h2>Order total:</h2>
      <h2>$70</h2>
    </div>
    <div className={styles.btn}>
      <Button size="lg">Place your order</Button>
    </div>
  </Container>
);

export {
  Component as OrderSummary,
  Component as OrderSummaryComponent,
};
