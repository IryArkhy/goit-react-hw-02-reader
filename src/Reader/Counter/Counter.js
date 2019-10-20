import React from 'react';
import T from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ indexOfPublication, numberOfPublications }) => (
  <p className={styles.counter}>
    {indexOfPublication + 1}/ {numberOfPublications}
  </p>
);

Counter.propTypes = {
  indexOfPublication: T.number.isRequired,
  numberOfPublications: T.number.isRequired,
};

export default Counter;
