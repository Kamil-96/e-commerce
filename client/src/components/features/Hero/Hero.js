import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Exceptional Shop!</h1>
      </div>
      <img className={styles.image} src='/images/header.jpg' alt='' />
    </div>
  );
};

export default Hero;
