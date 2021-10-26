import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ProductSummary.module.scss';

import { Col } from 'reactstrap';

const Component = ({ id, imageOne, name, price }) => (
  <Col xs="12" sm="6" md="4" lg="3">
    <Link to={`/product/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={imageOne} alt='' />
        <h3 className={styles.name}>{name}</h3>
        <p>Price: {price}</p>
      </article>
    </Link>
  </Col>
);

Component.propTypes = {
  id: PropTypes.number,
  imageOne: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export {
  Component as ProductSummary,
  Component as ProductSummaryComponent,
};
