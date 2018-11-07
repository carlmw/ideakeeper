import React from 'react';
import PropTypes from 'prop-types';
import styles from './Idea.css';

const Idea = ({ title, body, isLatestIdea = false, onTitleChange, onBodyChange, onDelete }) => {
  const onTitleBlur = (event) => onTitleChange(event.target.value);
  const onBodyBlur = (event) => onBodyChange(event.target.value);

  return (
    <div className={styles.idea}>
      <header className={styles.header}>
        <input autoFocus={isLatestIdea} className={styles.field} type="text" defaultValue={title} onBlur={onTitleBlur} />
        <button title="Remove idea" className={styles.delete} onClick={onDelete} type="button">×</button>
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
  onDelete: PropTypes.func.isRequired,
  isLatestIdea: PropTypes.bool,
};

export default Idea;
