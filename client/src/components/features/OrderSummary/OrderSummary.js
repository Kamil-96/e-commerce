import React from 'react';
import { useSelector } from 'react-redux';

import { getAllCartProducts } from '../../../redux/cartRedux';

import calculatePrice from '../../../utils/calculatePrice';

import styles from './OrderSummary.module.scss';

import Button from '../../common/Button/Button';

import { Container } from 'reactstrap';

const OrderSummary = () => {
  const cartProducts = useSelector(state => getAllCartProducts(state));

  const delivery = 20;
  const productsPrice = cartProducts.map(product =>
    calculatePrice(product.price, product.amount)
  );
  const subtotalPrice = productsPrice.reduce((a, b) => a + b, 0);
  const totalPrice = `$${subtotalPrice + delivery}`;

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
        <h2>{totalPrice}</h2>
      </div>
      <div className={styles.btn}>
        <Button variant='big'>Place your order</Button>
      </div>
    </Container>
  );
};

export default OrderSummary;
