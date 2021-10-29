import React from 'react';

import styles from './Form.module.scss';

import { Container } from 'reactstrap';

import { OrderForm } from '../../features/OrderForm/OrderForm';

const Component = () => (
  <Container className={styles.root}>
    <OrderForm />
  </Container>
);

export {
  Component as Form,
  Component as FormComponent,
};
