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

  it('renders an idea', () => {
    expect(shallow(<Idea {...AN_IDEA} />)).toMatchSnapshot();
  });
});
