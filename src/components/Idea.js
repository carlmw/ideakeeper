import React from 'react';
import PropTypes from 'prop-types';
import styles from './Idea.css';

const Idea = ({ title, body, onTitleChange, onBodyChange }) => {
  return (
    <div className={styles.idea}>
      <header>
        <input className={styles.field} type="text" value={title} onChange={onTitleChange} />
      </header>
      <textarea className={styles.field} maxLength={140} value={body} onChange={onBodyChange} />
    </div>
  );
};
Idea.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
};

export default Idea;
