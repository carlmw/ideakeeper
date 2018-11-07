import ideas from './ideas';

describe('ideasReducer', () => {
  const ID = '1';
  const AN_IDEA = {
    id: ID,
    title: 'Chocolate teapot',
    body: 'A reusable teapot made from dark chocolate',
    created_at: '2018-11-06T18:42:17.229Z'
  };
  const INITIAL_STATE = {
    byId: {
      [ID]: AN_IDEA,
    }
  };

  it('updates title when SET_TITLE is received', () => {
    const NEW_TITLE = 'a puddle of chocolate';
    const SET_TITLE = { type: 'SET_TITLE', payload: { id: ID, title: NEW_TITLE } };

    expect(ideas(INITIAL_STATE, SET_TITLE).byId[ID]).toEqual({
      ...AN_IDEA,
      title: NEW_TITLE,
    });
  });

  it('updates body when SET_BODY is received', () => {
    const NEW_BODY = 'it melted';
    const SET_BODY = { type: 'SET_BODY', payload: { id: ID, body: NEW_BODY } };

    expect(ideas(INITIAL_STATE, SET_BODY).byId[ID]).toEqual({
      ...AN_IDEA,
      body: NEW_BODY,
    });
  });

  it('adds new ideas to the store', () => {
    const NEW_ID = '2';
    const NEW_IDEA = {
      id: NEW_ID,
    };
    const NEW_IDEA_RECEIVED = { type: 'NEW_IDEA_RECEIVED', payload: NEW_IDEA };

    expect(ideas(INITIAL_STATE, NEW_IDEA_RECEIVED).byId).toEqual({
      [ID]: AN_IDEA,
      [NEW_ID]: NEW_IDEA,
    });
  });

  it('populates the store when ideas are received', () => {
    const IDEAS_RECEIVED = { type: 'IDEAS_RECEIVED', payload: [AN_IDEA] };

    expect(ideas({}, IDEAS_RECEIVED).byId).toEqual({
      [ID]: AN_IDEA
    });
  });
});
