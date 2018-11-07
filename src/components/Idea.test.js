import React from 'react';
import { shallow } from 'enzyme';
import Idea from './Idea';

describe('<Idea />', () => {
  const AN_IDEA = {
    id: '1',
    created_date: '2018-11-06T18:42:17.229Z',
    title: 'Chocolate teapot',
    body: 'A reusable teapot made from dark chocolate',
    onTitleChange: () => {},
    onBodyChange: () => {}
  };

  let result;
  beforeEach(() => {
    result = shallow(<Idea {...AN_IDEA} />);
  });

  it('renders an idea', () => {
    expect(result).toMatchSnapshot();
  });

  describe('when the title field blurs', () => {
    const NEW_TITLE = 'a puddle of chocolate';

    it('triggers onTitleChange', () => {
      const onTitleChange = jasmine.createSpy('onTitleChange');
      result.setProps({ onTitleChange });
      result.find('input').simulate('blur', { target: { value: NEW_TITLE } });

      expect(onTitleChange).toHaveBeenCalledWith(NEW_TITLE);
    });
  });

  describe('when the body field blurs', () => {
    const NEW_BODY = 'it melted';

    it('triggers onTitleChange', () => {
      const onBodyChange = jasmine.createSpy('onTitleChange');
      result.setProps({ onBodyChange });
      result.find('textarea').simulate('blur', { target: { value: NEW_BODY } });

      expect(onBodyChange).toHaveBeenCalledWith(NEW_BODY);
    });
  });
});
