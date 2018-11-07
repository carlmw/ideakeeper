import React from 'react';
import { shallow } from 'enzyme';
import { IdeaList } from './IdeaListContainer';

describe('<IdeaListContainer />', () => {
  const MockIdea = () => null;
  const ID = '1';
  const AN_IDEA = {
    id: ID,
    created_date: '2018-11-06T18:42:17.229Z',
    title: 'Chocolate teapot',
    body: 'A reusable teapot made from dark chocolate',
  };
  const BY_ID = {
    [ID]: AN_IDEA,
  };
  let result;

  beforeEach(() => {
    result = shallow(
      <IdeaList byId={BY_ID}>
        {(idea) => <MockIdea key={idea.id} {...idea} />}
      </IdeaList>
    );
  });

  it('renders a list of ideas', () => {
    expect(result.containsMatchingElement(
      <MockIdea {...AN_IDEA} />
    )).toBe(true);
  });

  it('calls setTitle when onTitleChange is triggered', () => {
    const setTitle = jasmine.createSpy('setTitle');
    result.setProps({ setTitle });
    result.find(MockIdea).prop('onTitleChange')(AN_IDEA.title);

    expect(setTitle).toHaveBeenCalledWith(ID, AN_IDEA.title);
  });

  it('calls setBody when onBodyChange is triggered', () => {
    const setBody = jasmine.createSpy('setTitle');
    result.setProps({ setBody });
    result.find(MockIdea).prop('onBodyChange')(AN_IDEA.body);

    expect(setBody).toHaveBeenCalledWith(ID, AN_IDEA.body);
  });

  it('calls deleteIdea when onDelete is triggered', () => {
    const deleteIdea = jasmine.createSpy('deleteIdea');
    result.setProps({ deleteIdea });
    result.find(MockIdea).prop('onDelete')();

    expect(deleteIdea).toHaveBeenCalledWith(ID);
  });

  describe('when latestIdea matches the id of the current idea', () => {
    it('isLatestIdea is true', () => {
      expect(result.find(MockIdea).prop('isLatestIdea')).toBe(false);

      result.setProps({ latestIdea: ID });

      expect(result.find(MockIdea).prop('isLatestIdea')).toBe(true);
    });
  });
});
