import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner />, div);
});

test('renders as inteded', () => {
	const component = renderer.create(<Banner />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

it('has proper title', () => {
	const banner = shallow(<Banner />);
	expect(banner.text()).toEqual("Welcome to Conway's Game of Life");
});

