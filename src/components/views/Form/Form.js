import React from 'react';

import styles from './Form.module.scss';

import { Container } from 'reactstrap';

import OrderForm from '../../features/OrderForm/OrderForm';

const Form = () => (
  <Container className={styles.root}>
    <OrderForm />
  </Container>
);

export default Form;
