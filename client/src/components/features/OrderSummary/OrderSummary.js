import React from 'react';

import PropTypes from 'prop-types';

import styles from './OrderSummary.module.scss';

import Button from '../../common/Button/Button';

import { Container } from 'reactstrap';

const OrderSummary = ({ delivery, subtotalPrice, totalPrice }) => {

  return (
    <Container>
      <div className={styles.wrapper}>
        <h3>Items:</h3>
        <h3>${subtotalPrice}</h3>
      </div>
      <div className={styles.wrapper}>
        <h3>Delivery:</h3>
        <h3>${delivery}</h3>
      </div>
      <div className={styles.wrapper}>
        <h2>Order total:</h2>
        <h2>${totalPrice}</h2>
      </div>
      <div className={styles.btn}>
        <Button variant='big'>Place your order</Button>
      </div>
    </Container>
  );
};

OrderSummary.propTypes = {
  delivery: PropTypes.number.isRequired,
  subtotalPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
