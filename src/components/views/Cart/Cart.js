import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCartProducts, removeFromCart } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';
import { Col, Container, Row, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Component = () => {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => getAllCartProducts(state));
  const removeProduct = id => dispatch(removeFromCart(id));

  return(
    <Container className={styles.root}>
      {cartProducts.map(cartProduct =>
        <Row className={styles.wrapper} key={cartProduct.id} >
          <Col xs="12" md="5">
            <h4>{cartProduct.name}</h4>
          </Col>
          <Col xs="12" md="3">
            <div className={styles.inputWrapper}>
              <button className={styles.btn}><FontAwesomeIcon icon={faMinus} /></button>
              <input className={styles.input} type="text" />
              <button className={styles.btn}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </Col>
          <Col xs="12" md="2">
            <h4>{cartProduct.price}</h4>
          </Col>
          <Col xs="12" md="2"><button className={styles.btnTrash} onClick={e => removeProduct(cartProduct.id)}><FontAwesomeIcon className={styles.icon} icon={faTrashAlt} /></button></Col>
          <Col>
            <textarea className={styles.messageInput} name="message" placeholder="Type your message to personalize the product (optional)" rows="1" />
          </Col>
        </Row>
      )}
      <div className={styles.btnWrapper}>
        <Button href="/form">Proceed to checkout</Button>
      </div>
    </Container>
  );
};

export {
  Component as Cart,
  Component as CartComponent,
};
