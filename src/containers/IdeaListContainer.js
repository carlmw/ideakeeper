import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTitle, setBody } from '../actions';

const IdeaList = ({ byId, setBody, setTitle, children }) => {
  const ideas = Object.keys(byId).map(id => (
    children({
      ...byId[id],
      onBodyChange: body => setBody(id, body),
      onTitleChange: title => setTitle(id, title)
    })
  ));

  return <React.Fragment>{ideas}</React.Fragment>;
};
IdeaList.propTypes = {
  byId: PropTypes.object,
  children: PropTypes.func.isRequired,
  setBody: PropTypes.func,
  setTitle: PropTypes.func,
};

const mapStateToProps = ({ ideas: { byId } }) => ({ byId });
const IdeaListContainer = connect(mapStateToProps, { setBody, setTitle })(IdeaList);

export { IdeaListContainer as default, IdeaList };
