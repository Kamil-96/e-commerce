import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

import { Container, Row, Col, Button, Input } from 'reactstrap';

import { NotFound } from '../NotFound/NotFound';

const Component = ({product}) => {
  if(!product) return <NotFound />;

  else return (
    <Container className={styles.root}>
      <Row>
        <Col className={styles.imageWrapper} xs="12" md="6" lg="4" xl="3">
          <img className={styles.image} src={product.imageTwo} alt='' />
        </Col>
        <Col className={styles.imageWrapper} xs="12" md="6" lg="4" xl="3">
          <img className={styles.image} src={product.imageThree} alt='' />
        </Col>
        <Col className={styles.wrapper} xs="12" lg="4" xl="6">
          <h2 className={styles.title}>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Select number of products</h3>
          <Input className={styles.input} type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
          <Button className={styles.button}>Add to cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

Component.propTypes = {
  product: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component);

export {
  ComponentContainer as Product,
  Component as ProductComponent,
};
