import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Home.module.scss';

import HomeCarousel from '../../features/HomeCarousel/HomeCarousel';
import ProductSummary from '../../features/ProductSummary/ProductSummary';

import { Container, Row } from 'reactstrap';

const Home = () => {
  const products = useSelector(state => getAll(state));

  return (
    <div className={styles.root}>
      <HomeCarousel />
      <h1 className={styles.title}>Find your dream jeans</h1>
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
