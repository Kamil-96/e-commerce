import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllCartProducts, removeFromCart, amountIncrease } from '../../../redux/cartRedux';

import styles from './Cart.module.scss';
import { Col, Container, Row, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Component = () => {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => getAllCartProducts(state));
  const removeProduct = id => dispatch(removeFromCart(id));
  const increaseAmount = payload => dispatch(amountIncrease(payload));

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
              <input className={styles.input} type="number" min="1" max="3" value={cartProduct.amount} />
              <button className={styles.btn} onClick={() => increaseAmount(cartProduct.id)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
          </Col>
          <Col xs="12" md="2">
            <h4>{cartProduct.price}</h4>
          </Col>
          <Col xs="12" md="2"><button className={styles.btnTrash} onClick={() => removeProduct(cartProduct.id)}><FontAwesomeIcon className={styles.icon} icon={faTrashAlt} /></button></Col>
          <Col>
            <textarea className={styles.messageInput} name="message" placeholder="Type your message to personalize the product (optional)" rows="1" />
          </Col>
        </Row>
      )}
      {cartProducts.length ?
        <Link to="/form">
          <div className={styles.btnWrapper}>
            <Button>Proceed to checkout</Button>
          </div>
        </Link>
        : <h2 className={styles.emptyInfo}>Your cart is empty</h2>
      }
    </Container>
  );
};

export {
  Component as Cart,
  Component as CartComponent,
};
