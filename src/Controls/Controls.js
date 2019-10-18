import React, { Component } from 'react';
import T from 'prop-types';

export default class Controls extends Component {
  state = {};

  render() {
    return (
      <section className="controls">
        <button type="button" className="button">
          Назад
        </button>
        <button type="button" className="button">
          Вперед
        </button>
      </section>
    );
  }
}
