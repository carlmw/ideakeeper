import React from 'react';
import { shallow } from 'enzyme';
import { IdeaList } from './IdeaListContainer';

describe('<IdeaListContainer />', () => {
  const MockIdea = () => null;
  const AN_IDEA = {
    id: 1,
    created_date: '2018-11-06T18:42:17.229Z',
    title: 'Chocolate teapot',
    body: 'A reusable teapot made from dark chocolate',
  };
  const BY_ID = {
    1: AN_IDEA,
  };

  it('renders a list of ideas', () => {
    const result = shallow(
      <IdeaList byId={BY_ID}>
        {(idea) => <MockIdea key={idea.id} {...idea} />}
      </IdeaList>
    );

    expect(result.containsMatchingElement(
      <MockIdea {...AN_IDEA} />
    )).toBe(true);
  });
});
