import React from 'react';
import PropTypes from 'prop-types';
import styles from './Idea.css';

const Idea = ({ title, body, onTitleChange, onBodyChange }) => {
  const onTitleBlur = (event) => onTitleChange(event.target.value);
  const onBodyBlur = (event) => onBodyChange(event.target.value);

  return (
    <div className={styles.idea}>
      <header>
        <input className={styles.field} type="text" defaultValue={title} onBlur={onTitleBlur} />
      </header>
      <textarea className={styles.field} maxLength={140} defaultValue={body} onBlur={onBodyBlur} />
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
