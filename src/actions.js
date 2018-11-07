export const setTitle = (id, title) => ({
  type: 'SET_TITLE',
  payload: { id, title }
});

export const setBody = (id, body) => ({
  type: 'SET_BODY',
  payload: { id, body }
});
