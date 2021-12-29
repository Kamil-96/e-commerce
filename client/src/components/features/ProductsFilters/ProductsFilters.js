import React, { useState } from 'react';

import styles from './ProductsFilters.module.scss';

import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const productTypes = [
  'Jeans',
  'Dress',
  'Suit Jacket',
  'Sweater',
  'Scarf',
  'Hat',
];

const genderTypes = ['All', 'Men', 'Women'];

const ProductsFilters = () => {
  const [buttonState, setButtonState] = useState([false, false]);
  const [checkboxesState, setCheckboxesState] = useState(
    new Array(productTypes.length).fill(false)
  );
  const [selectedInput, setSelectedInput] = useState('All');

  const handleButtons = position => {
    const updatedButtonsState = buttonState.map((item, index) =>
      index === position ? !item : item
    );

    setButtonState(updatedButtonsState);
  };

  const isRadioSelected = value => selectedInput === value;

  const handleSelectedInput = e => {
    setSelectedInput(e.target.value);
  };

  const handleCheckboxes = position => {
    const updatedCheckboxesState = checkboxesState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckboxesState(updatedCheckboxesState);
  };

  return (
    <div className={styles.component}>
      <Col md={4}>
        <label className={styles.searchLabel}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Search...'
          />
        </label>
      </Col>
      <Col className={styles.filterContainer} md={4}>
        <button className={styles.btn} onClick={() => handleButtons(0)}>
          <span>Gender</span>
          {!buttonState[0] && <FontAwesomeIcon icon={faChevronDown} />}
          {buttonState[0] && <FontAwesomeIcon icon={faChevronUp} />}
        </button>
        {buttonState[0] && (
          <div className={styles.listContainer}>
            {genderTypes.map((gender, index) => (
              <label className={styles.label} key={index}>
                <input
                  type='radio'
                  value={gender}
                  checked={isRadioSelected(gender)}
                  onChange={e => handleSelectedInput(e)}
                />
                {gender}
                {selectedInput === gender && <FontAwesomeIcon icon={faCheck} />}
              </label>
            ))}
          </div>
        )}
      </Col>
      <Col className={styles.filterContainer} md={4}>
        <button className={styles.btn} onClick={() => handleButtons(1)}>
          <span>Type</span>
          {!buttonState[1] && <FontAwesomeIcon icon={faChevronDown} />}
          {buttonState[1] && <FontAwesomeIcon icon={faChevronUp} />}
        </button>
        {buttonState[1] && (
          <div className={styles.listContainer}>
            {productTypes.map((type, index) => (
              <label className={styles.label} key={index}>
                <input
                  type='checkbox'
                  checked={checkboxesState[index]}
                  onChange={() => handleCheckboxes(index)}
                />
                {type}
                {checkboxesState[index] && <FontAwesomeIcon icon={faCheck} />}
              </label>
            ))}
          </div>
        )}
      </Col>
    </div>
  );
};

export default ProductsFilters;
