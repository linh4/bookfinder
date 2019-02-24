import './setupTests'
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Search from './components/Search';
import ShowPage from './components/ShowPage';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('show a Search Bar', () => {
  expect(wrapped.find(Search).length).toEqual(1);
})

it('show a Show Page', () => {
  expect(wrapped.find(ShowPage).length).toEqual(1);
})
