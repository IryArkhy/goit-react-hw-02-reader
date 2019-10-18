import React, { Component } from 'react';
import T from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import '../styles.css';

export default class Reader extends Component {
  state = {};

  render() {
    return (
      <div className="reader">
        {/* <!-- Разметка компонента <Controls> --></Controls> */}
        <Controls />
        {/* <!-- Разметка компонента <Counter> --> */}
        <Counter />
        {/* <!-- Разметка компонента <Publication> --> */}
        <Publication />
      </div>
    );
  }
}
