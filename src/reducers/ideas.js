const initialState = {
  byId: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TITLE': {
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...state.byId[payload.id],
            title: payload.title,
          }
        }
      }
    }
    case 'SET_BODY': {
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...state.byId[payload.id],
            body: payload.body,
          }
        }
      }
    }
    case 'NEW_IDEA_RECEIVED': {
        return {
          ...state,
          byId: {
            ...state.byId,
            [payload.id]: payload,
          }
        }
    }
    case 'IDEAS_RECEIVED': {
      return {
        ...state,
        byId: payload.reduce((memo, idea) => ({ ...memo, [idea.id]: idea }), {})
      };
    }
    default:
      return state;
  }
};
