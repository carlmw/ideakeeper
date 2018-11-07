import omit from 'lodash.omit';

const initialState = {
  byId: {},
  latestIdea: null,
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
          },
          latestIdea: payload.id.toString(),
        }
    }
    case 'IDEAS_RECEIVED': {
      return {
        ...state,
        byId: payload.reduce((memo, idea) => ({ ...memo, [idea.id]: idea }), {})
      };
    }
    case 'DELETE_IDEA': {
      return {
        ...state,
        byId: omit(state.byId, [payload.id]),
      };
    }
    default:
      return state;
  }
};
