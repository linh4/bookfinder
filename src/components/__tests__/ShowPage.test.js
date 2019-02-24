import React from 'react';
import { mount } from 'enzyme';
import ShowPage from '../ShowPage';
import '../../setupTests'

let wrapped;

beforeEach(() => {
  wrapped = mount(<ShowPage />);
})

it('show an empty page until users search books', () => {
  expect(wrapped.find('.no-show').length).toEqual(1)
})
