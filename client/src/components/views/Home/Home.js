import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getAll, loadProductsRequest } from '../../../redux/productsRedux';

import styles from './Home.module.scss';

import ProductSummary from '../../features/ProductSummary/ProductSummary';
import Hero from '../../features/Hero/Hero';

import { Container, Row } from 'reactstrap';

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => getAll(state));

  useEffect(() => {
    const loadProducts = () => dispatch(loadProductsRequest());
    loadProducts();
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Hero />
      <h1 className={styles.title}>Find your dream clothes!</h1>
      <Container className={styles.container}>
        <Row>
          {products.map(product => (
            <ProductSummary key={product.id} {...product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
