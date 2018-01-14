import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
});

it('has proper title', () => {
	const banner = shallow(<Banner />);
	expect(banner.text()).toEqual("Welcome to Conway's Game of Life");
});
