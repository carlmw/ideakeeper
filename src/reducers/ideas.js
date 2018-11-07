const initialState = {
  byId: {
    '1': {
      id: '1',
      title: 'Chocolate teapot',
      body: 'A reusable teapot made from dark chocolate',
      created_at: '2018-11-06T18:42:17.229Z'
    },
    '2': {
      id: '2',
      title: 'Shoe umbrella',
      body: 'Tiny umbrellas to keep your shoes dry',
      created_at: '2018-11-06T18:43:17.229Z'
    },
    '3': {
      id: '3',
      title: 'Pizza pouch',
      body: 'Holds your pizza when you need a free hand',
      created_at: '2018-11-06T18:44:17.229Z'
    }
  }
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
  default:
    return state;
  }
};
