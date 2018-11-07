import React from 'react';
import { shallow } from 'enzyme';
import { AddIdeaButton } from './AddIdeaButtonContainer';

describe('<AddIdeaButtonContainer />', () => {
  it('calls addIdea when clicked', () => {
    const addIdea = jasmine.createSpy('addIdea');
    const result = shallow(
      <AddIdeaButton addIdea={addIdea}>Add an idea</AddIdeaButton>
    );
    result.simulate('click');

    expect(addIdea).toHaveBeenCalled();
  });
});
