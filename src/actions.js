export const setTitle = (id, title) => ({
  type: 'SET_TITLE',
  payload: { id, title }
});

export const setBody = (id, body) => ({
  type: 'SET_BODY',
  payload: { id, body }
});

export const addIdea = () => ({ type: 'ADD_IDEA' });
export const deleteIdea = id => ({ type: 'DELETE_IDEA', payload: { id } });
