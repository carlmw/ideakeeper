import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTitle, setBody, deleteIdea } from '../actions';

const IdeaList = ({ byId, latestIdea, setBody, setTitle, deleteIdea, children }) => {
  const ideas = Object.keys(byId).map(id => (
    children({
      ...byId[id],
      isLatestIdea: id === latestIdea,
      onBodyChange: body => setBody(id, body),
      onTitleChange: title => setTitle(id, title),
      onDelete: () => deleteIdea(id)
    })
  ));

  return <React.Fragment>{ideas}</React.Fragment>;
};
IdeaList.propTypes = {
  byId: PropTypes.object,
  children: PropTypes.func.isRequired,
  setBody: PropTypes.func,
  setTitle: PropTypes.func,
  latestIdea: PropTypes.string,
};

const mapStateToProps = ({ ideas: { byId, latestIdea } }) => ({ byId, latestIdea });
const IdeaListContainer = connect(mapStateToProps, { setBody, setTitle, deleteIdea })(IdeaList);

export { IdeaListContainer as default, IdeaList };
