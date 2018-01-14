import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Cell from './Cell';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
});

test('renders as inteded', () => {
	const component = renderer.create(<Cell />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});