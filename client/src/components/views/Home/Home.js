import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  getFilteredProducts,
  loadProductsRequest,
} from '../../../redux/productsRedux';

import styles from './Home.module.scss';

import ProductSummary from '../../features/ProductSummary/ProductSummary';
import Hero from '../../features/Hero/Hero';
import ProductsFilters from '../../features/ProductsFilters/ProductsFilters';

import { Container, Row } from 'reactstrap';

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => getFilteredProducts(state));

  useEffect(() => {
    const loadProducts = () => dispatch(loadProductsRequest());
    loadProducts();
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <Hero />
      <h1 className={styles.title}>Find your dream clothes!</h1>
      <Container className={styles.container}>
        <ProductsFilters />
        <Row>
          {products.length ? (
            products.map(product => (
              <ProductSummary key={product.id} {...product} />
            ))
          ) : (
            <p>No results found. Try adjusting the filters.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.array,
};

export default Home;
