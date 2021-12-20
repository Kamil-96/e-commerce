import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';

import styles from './Product.module.scss';

import { Container, Row, Col, Input } from 'reactstrap';

import NotFound from '../NotFound/NotFound';
import Button from '../../common/Button/Button';

const Product = props => {
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const product = useSelector(state =>
    getProductById(state, props.match.params.id)
  );
  const addProduct = product => dispatch(addToCart(product));

  const handleClick = () => {
    product.amount = parseInt(amount);
    addProduct(product);
  };

  if (!product) return <NotFound />;
  else
    return (
      <Container className={styles.root}>
        <Row>
          <Col className={styles.imageWrapper} xs='12' md='6' lg='4' xl='3'>
            <img className={styles.image} src={product.imageOne} alt='' />
          </Col>
          <Col className={styles.imageWrapper} xs='12' md='6' lg='4' xl='3'>
            <img className={styles.image} src={product.imageTwo} alt='' />
          </Col>
          <Col className={styles.wrapper} xs='12' lg='4' xl='6'>
            <h2 className={styles.title}>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Select number of products</h3>
            <Input
              className={styles.input}
              type='select'
              name='select'
              id='exampleSelect'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
            <Button onClick={handleClick}>Add to cart</Button>
          </Col>
        </Row>
      </Container>
    );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
