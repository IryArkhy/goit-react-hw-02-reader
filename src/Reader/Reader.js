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
    currentPublicationId: this.props.items[0].id,
  };

  indexOfCurrentPublication = id => {
    const { items } = this.props;
    const currentPublication = items.find(item => item.id === id);
    return items.indexOf(currentPublication);
  };

  showNextPublication = () => {
    const { items } = this.props;
    const { currentPublicationId } = this.state;
    let index = this.indexOfCurrentPublication(currentPublicationId);

    if (index === items.length - 1) {
      index = -1;
      this.setState({
        currentPublicationId: items[index + 1].id,
      });
    }

    this.setState({
      currentPublicationId: items[index + 1].id,
    });
  };

  showPreviousPublication = e => {
    const { items } = this.props;
    const { currentPublicationId } = this.state;
    let index = this.indexOfCurrentPublication(currentPublicationId);

    if (index === 0) {
      index = items.length;
      this.setState({
        currentPublicationId: items[index - 1].id,
      });
    }
    this.setState({
      currentPublicationId: items[index - 1].id,
    });
  };

  render() {
    const { items } = this.props;
    const { currentPublicationId } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          showNext={this.showNextPublication}
          showPrevious={this.showPreviousPublication}
        />
        <Counter
          indexOfPublication={this.indexOfCurrentPublication(
            currentPublicationId,
          )}
          numberOfPublications={items.length}
        />
        <Publication
          publicationId={currentPublicationId}
          publications={items}
        />
      </div>
    );
  }
}
