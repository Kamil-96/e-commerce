/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getAllCartProducts, clearCart as clearCartAction } from '../../../redux/cartRedux';
import { addOrderRequest } from '../../../redux/ordersRedux';

import styles from './OrderForm.module.scss';

import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import OrderSummary from '../OrderSummary/OrderSummary';

import calculatePrice from '../../../utils/calculatePrice';

const OrderForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  const dispatch = useDispatch();
  const addOrder = order => dispatch(addOrderRequest(order));
  const clearCart = () => dispatch(clearCartAction());

  const cartProducts = useSelector(state => getAllCartProducts(state));

  // Extract only necessary products data for placing order
  const orderProductsData = cartProducts.map(item => {
    return {
      id: item._id,
      productName: item.name,
      amount: item.amount,
      priceOne: `$${item.price}`,
      totalPrice: `$${item.price * item.amount}`,
      message: item.message,
    };
  });

  // Summarize order cost
  const delivery = 20;

  const productsPrice = cartProducts.map(product =>
    calculatePrice(product.price, product.amount)
  );

  const subtotalPrice = productsPrice.reduce((a, b) => a + b, 0);

  const totalPrice = subtotalPrice + delivery;

  // Collect orders data
  const order = {
    products: orderProductsData,
    name: nameInput,
    email: emailInput,
    phoneNumber: parseInt(phoneInput),
    totalOrderPrice: `$${totalPrice}`,
  };

  const nameInputHandler = e => {
    setNameInput(e.target.value);
  };

  const emailInputHandler = e => {
    setEmailInput(e.target.value);
  };

  const phoneInputHandler = e => {
    setPhoneInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if(nameInput && emailInput && phoneInput) {
      addOrder(order);
      clearCart();

      setNameInput('');
      setEmailInput('');
      setPhoneInput('');
    } else {
      alert('The form has to be filled to place order');
    }
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Order products</h1>
      <Form onSubmit={handleSubmit}>
        <Row className={styles.columnsWrapper}>
          <Col className={styles.contentWrapper} xs='12' md='5'>
            <h2 className={styles.subtitle}>Contact details</h2>
            <FormGroup className={styles.inputWrapper}>
              <Label for='clientName'>Name</Label>
              <Input
                type='text'
                value={nameInput}
                onChange={nameInputHandler}
                placeholder='Amanda Doe'
                required
              />
            </FormGroup>
            <FormGroup className={styles.inputWrapper}>
              <Label for='clientEmail'>Email</Label>
              <Input
                type='email'
                value={emailInput}
                onChange={emailInputHandler}
                placeholder='amandadoe@example.com'
                required
              />
            </FormGroup>
            <FormGroup className={styles.inputWrapper}>
              <Label for='clientPhoneNumber'>Phone number</Label>
              <Input
                type='text'
                value={phoneInput}
                onChange={phoneInputHandler}
                placeholder='123321456'
                maxLength='9'
                required
              />
            </FormGroup>
            <FormGroup className={styles.inputWrapper}>
              <Label check>
                <Input type='checkbox' required /> I agree with{' '}
                <a className={styles.link} href='#'>
                  Terms and conditions
                </a>{' '}
                and{' '}
                <a className={styles.link} href='#'>
                  Privacy Policy
                </a>
                .
              </Label>
            </FormGroup>
          </Col>
          <Col className={styles.contentWrapper} xs='12' md='5'>
            <h2 className={styles.subtitle}>Order Summary</h2>
            <OrderSummary
              subtotalPrice={subtotalPrice}
              totalPrice={totalPrice}
              delivery={delivery}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default OrderForm;
