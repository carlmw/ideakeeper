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
});
