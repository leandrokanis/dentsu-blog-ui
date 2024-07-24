import React from 'react';
import ToggleTimeline from '.';
import { shallow } from 'enzyme';
import { faker } from '@faker-js/faker';

describe('ToggleTimeline component', () => {
  let props: any

  beforeEach(() => {
    props = {
      onToggle: jest.fn(),
      isFollowing: faker.datatype.boolean()
    };
  });

  it('should render correctly', () => {
    const wrapper = shallow(<ToggleTimeline {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });
})