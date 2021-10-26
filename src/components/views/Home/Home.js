import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Home.module.scss';

import { HomeCarousel } from '../../features/HomeCarousel/HomeCarousel';
import { ProductSummary } from '../../features/ProductSummary/ProductSummary';

import { Container, Row } from 'reactstrap';

const Component = ({products }) => (
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

Component.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const ComponentContainer = connect(mapStateToProps)(Component);

export {
  ComponentContainer as Home,
  Component as HomeComponent,
};
