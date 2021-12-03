/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (

  <footer className={styles.root}>
    <small className={styles.text}>Copyright &copy; Exceptional Jeans Shop 2021</small>
    <div className={styles.iconsWrapper}>
      <ul className={styles.iconsList}>
        <li className={styles.iconElem}><a href="#"><FontAwesomeIcon className={styles.icon} icon={faFacebook} />Facebook</a></li>
        <li className={styles.iconElem}><a href="#"><FontAwesomeIcon className={styles.icon} icon={faTwitter} />Twitter</a></li>
        <li className={styles.iconElem}><a href="#"><FontAwesomeIcon className={styles.icon} icon={faInstagram} />Instagram</a></li>
        <li className={styles.iconElem}><a href="#"><FontAwesomeIcon className={styles.icon} icon={faYoutube} />YouTube</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
