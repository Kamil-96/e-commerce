import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProductsFilters.module.scss';

import {
  getAllFilters,
  changeSearchPhrase,
  changeGender as changeGenderAction,
  addType,
  removeType,
} from '../../../redux/filtersRedux';

import { Col, Row } from 'reactstrap';
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

const genderTypes = ['All', 'Man', 'Woman'];

const ProductsFilters = () => {
  const [buttonState, setButtonState] = useState([false, false]);

  const dispatch = useDispatch();
  const filters = useSelector(state => getAllFilters(state));
  const changePhrase = payload => dispatch(changeSearchPhrase(payload));
  const changeGender = payload => dispatch(changeGenderAction(payload));
  const addProductType = payload => dispatch(addType(payload));
  const removeProductType = payload => dispatch(removeType(payload));

  const handleButtons = position => {
    const updatedButtonsState = buttonState.map((item, index) =>
      index === position ? !item : item
    );

    setButtonState(updatedButtonsState);
  };

  const isRadioSelected = value => filters.gender === value;

  const handleSelectedInput = e => {
    changeGender(e.target.value);
  };

  const handleCheckboxes = (type, checked) => {
    if (checked) {
      addProductType(type);
    } else {
      removeProductType(type);
    }
  };

  const handleSearchPhrase = phrase => {
    changePhrase(phrase);
  };

  return (
    <Row className={styles.component}>
      <Col className={styles.inputContainer} xs='12' md='4'>
        <label className={styles.searchLabel}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Search...'
            value={filters.searchPhrase}
            onChange={e => handleSearchPhrase(e.target.value)}
          />
        </label>
      </Col>
      <Col
        className={styles.filterContainer}
        xs='12'
        md='4'
      >
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
                <span>{gender}</span>
                {filters.gender === gender && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </label>
            ))}
          </div>
        )}
      </Col>
      <Col className={styles.filterContainer} xs='12' md='4'>
        <button className={styles.btn} onClick={() => handleButtons(1)}>
          <span>Types</span>
          {!buttonState[1] && <FontAwesomeIcon icon={faChevronDown} />}
          {buttonState[1] && <FontAwesomeIcon icon={faChevronUp} />}
        </button>
        {buttonState[1] && (
          <div className={styles.listContainer}>
            {productTypes.map((type, index) => (
              <label className={styles.label} key={index}>
                <input
                  type='checkbox'
                  checked={filters.types.indexOf(type) > -1}
                  onChange={e => handleCheckboxes(type, e.target.checked)}
                />
                <span>{type}</span>
                {filters.types.indexOf(type) > -1 && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </label>
            ))}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default ProductsFilters;
