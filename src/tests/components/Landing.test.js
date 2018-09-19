import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../Components/Utils/Landing';

test('should render Landing', () => {
  const wrapper = shallow(<Landing />);
  expect(wrapper).toMatchSnapshot();
});
