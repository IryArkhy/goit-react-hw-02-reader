import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ publicationId, publications }) => (
  <>
    {publications.length > 0 &&
      publications.map(
        publication =>
          publication.id === publicationId && (
            <article key={publication.id} className={styles.publication}>
              <h2>{publication.title}</h2>
              <p>{publication.text}</p>
            </article>
          ),
      )}
  </>
);

Publication.propTypes = {
  publicationId: T.string.isRequired,
  publications: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      title: T.string.isRequired,
      text: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Publication;
