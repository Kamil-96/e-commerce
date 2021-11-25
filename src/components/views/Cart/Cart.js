import React from 'react';

import styles from './Cart.module.scss';
import { Col, Container, Row, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Component = () => (
  <Container className={styles.root}>
    <Row className={styles.wrapper}>
      <Col xs="12" md="5">
        <h4>Excellent Jeans 1</h4>
      </Col>
      <Col xs="12" md="3">
        <div className={styles.inputWrapper}>
          <button className={styles.btn}><FontAwesomeIcon icon={faMinus} /></button>
          <input className={styles.input} type="text" />
          <button className={styles.btn}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
      </Col>
      <Col xs="12" md="2">
        <h4>$50</h4>
      </Col>
      <Col xs="12" md="2"><button className={styles.btnTrash}><FontAwesomeIcon className={styles.icon} icon={faTrashAlt} /></button></Col>
      <Col>
        <textarea className={styles.messageInput} name="message" placeholder="Type your message to personalize the product (optional)" rows="1" />
      </Col>
    </Row>
    <div className={styles.btnWrapper}>
      <Button href="/form">Proceed to checkout</Button>
    </div>
  </Container>
);

export {
  Component as Cart,
  Component as CartComponent,
};
