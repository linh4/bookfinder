import '../../setupTests'
import React from 'react';
import { mount } from 'enzyme';
import Search from '../Search';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Search />);
})

afterEach(() => {
  wrapped.unmount()
})

it('has a a form to search', () => {
  expect(wrapped.find('form').length).toEqual(1);
})

it('has a input that user can type in', () => {
  wrapped.find('.search-bar').simulate('change', {
    target: { value: 'cat' }
  })
  wrapped.update()
  expect(wrapped.find('.search-bar').prop('value')).toEqual('cat')
})
