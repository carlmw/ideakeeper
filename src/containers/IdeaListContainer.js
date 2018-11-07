import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTitle, setBody } from '../actions';

const IdeaList = ({ byId, onTitleChange, onBodyChange, children }) => {
  const ideas = Object.keys(byId).map(id => (
    children({ ...byId[id], onBodyChange, onTitleChange })
  ));

  return <React.Fragment>{ideas}</React.Fragment>;
};
IdeaList.propTypes = {
  byId: PropTypes.object,
  children: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ideas: { byId } }) => ({ byId });
const mapDispatchToProps = dispatch => {
  const onTitleChange = () => console.log('change title');
  const onBodyChange = () => console.log('change body');

  return { onTitleChange, onBodyChange };
}
const IdeaListContainer = connect(mapStateToProps, mapDispatchToProps)(IdeaList);

export { IdeaListContainer as default, IdeaList };
