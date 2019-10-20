import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ showNext, showPrevious }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={() => showPrevious()}
    >
      Previous
    </button>
    <button type="button" className={styles.button} onClick={() => showNext()}>
      Next
    </button>
  </section>
);

Controls.propTypes = {
  showNext: T.func.isRequired,
  showPrevious: T.func.isRequired,
};

export default Controls;
