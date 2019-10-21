import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    currentPublicationIdx: this.props.items.indexOf(this.props.items[0]),
  };

  showNextPublication = () => {
    const { items } = this.props;
    const { currentPublicationIdx } = this.state;

    if (currentPublicationIdx === items.length - 1) {
      return;
    }

    this.setState({
      currentPublicationIdx: items.indexOf(items[currentPublicationIdx + 1]),
    });
  };

  showPreviousPublication = () => {
    const { items } = this.props;
    const { currentPublicationIdx } = this.state;

    if (currentPublicationIdx === 0) {
      return;
    }
    this.setState({
      currentPublicationIdx: items.indexOf(items[currentPublicationIdx - 1]),
    });
  };

  render() {
    const { items } = this.props;
    const { currentPublicationIdx } = this.state;

    const isNextDisabled = currentPublicationIdx === items.length - 1;
    const isPrevDisabled = currentPublicationIdx === 0;
    return (
      <div className={styles.reader}>
        <Controls
          showNext={this.showNextPublication}
          showPrevious={this.showPreviousPublication}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
        <Counter
          currentPublication={currentPublicationIdx + 1}
          numberOfPublications={items.length}
        />
        <Publication
          currentPublicationNum={currentPublicationIdx + 1}
          publication={items[currentPublicationIdx]}
        />
      </div>
    );
  }
}
