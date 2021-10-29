import React from 'react';

import styles from './OrderForm.module.scss';

import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

import { OrderSummary } from '../OrderSummary/OrderSummary';

const Component = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>Order products</h1>
    <Form>
      <Row className={styles.columnsWrapper}>
        <Col className={styles.contentWrapper} xs="12" md="5">
          <h2 className={styles.subtitle}>Contact details</h2>
          <FormGroup>
            <Label for="clientName">Name</Label>
            <Input type="text" placeholder="Amanda Doe" required />
          </FormGroup>
          <FormGroup>
            <Label for="clientEmail">Email</Label>
            <Input type="email" placeholder="amandadoe@example.com" required />
          </FormGroup>
          <FormGroup>
            <Label for="clientPhoneNumber">Phone number</Label>
            <Input type="text" placeholder="123321456" maxLength="9" required />
          </FormGroup>
          <FormGroup>
            <Label check>
              <Input type="checkbox" required /> I agree with <a className={styles.link} href="#">Terms and conditions</a> and <a className={styles.link} href="#">Privacy Policy</a>.           {/*eslint-disable-line*/}
            </Label>
          </FormGroup>
        </Col>
        <Col className={styles.contentWrapper} xs="12" md="5">
          <h2 className={styles.subtitle}>Order Summary</h2>
          <OrderSummary />
        </Col>
      </Row>
    </Form>
  </div>
);

export {
  Component as OrderForm,
  Component as OrderFormComponent,
};
