import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addIdea } from '../actions';

const AddIdeaButton = ({ addIdea, children }) => {
  const onClick = () => addIdea();

  return (
    <button
      onClick={onClick}
      style={{ width: '100%' }}
    >
      {children}
    </button>
  );
};
AddIdeaButton.propTypes = {
  addIdea: PropTypes.func,
  children: PropTypes.node,
};

const AddIdeaButtonContainer = connect(null, { addIdea })(AddIdeaButton);

export { AddIdeaButtonContainer as default, AddIdeaButton };
