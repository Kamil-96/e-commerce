import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getAllCartProducts,
  removeFromCart,
  amountIncrease,
  amountDecrease,
  amountChange,
  addMessage as addMessageAction,
} from '../../../redux/cartRedux';

import calculatePrice from '../../../utils/calculatePrice';

import styles from './Cart.module.scss';

import Button from '../../common/Button/Button';

import { Col, Container, Input, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => getAllCartProducts(state));
  const removeProduct = id => dispatch(removeFromCart(id));
  const increaseAmount = id => dispatch(amountIncrease(id));
  const decreaseAmount = id => dispatch(amountDecrease(id));
  const changeAmount = payload => dispatch(amountChange(payload));
  const addMessage = payload => dispatch(addMessageAction(payload));

  return (
    <Container className={styles.root}>
      {cartProducts.map(cartProduct => (
        <Row className={styles.wrapper} key={cartProduct.id}>
          <Col xs='12' md='5'>
            <h4>{cartProduct.name}</h4>
          </Col>
          <Col xs='12' md='3'>
            <div className={styles.inputWrapper}>
              <button
                className={styles.btn}
                onClick={() =>
                  cartProduct.amount > 1
                    ? decreaseAmount(cartProduct.id)
                    : false
                }
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                className={styles.input}
                type='number'
                min='1'
                max='3'
                value={cartProduct.amount}
                onChange={ e =>
                  parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= 3
                    ? changeAmount({ id: cartProduct.id, value: parseInt(e.target.value) })
                    : false
                }
              />
              <button
                className={styles.btn}
                onClick={() =>
                  cartProduct.amount < 3
                    ? increaseAmount(cartProduct.id)
                    : false
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </Col>
          <Col xs='12' md='2'>
            <h4>{`$${calculatePrice(
              cartProduct.price,
              cartProduct.amount
            )}`}</h4>
          </Col>
          <Col xs='12' md='2'>
            <button
              className={styles.btnTrash}
              onClick={() => removeProduct(cartProduct.id)}
            >
              <FontAwesomeIcon className={styles.icon} icon={faTrashAlt} />
            </button>
          </Col>
          <Col>
            <Input
              className={styles.messageInput}
              name='message'
              type='textarea'
              value={cartProduct.message}
              placeholder='Type your message to personalize the product (optional)'
              rows='1'
              onChange={ e => addMessage({ id: cartProduct.id, value: e.target.value })}
            />
          </Col>
        </Row>
      ))}
      {cartProducts.length ? (
        <div className={styles.btnWrapper}>
          <Link to='/form'>
            <Button>Proceed to checkout</Button>
          </Link>
        </div>
      ) : (
        <h2 className={styles.emptyInfo}>Your cart is empty</h2>
      )}
    </Container>
  );
};

export default Cart;
