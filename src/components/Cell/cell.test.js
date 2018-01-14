import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Cell from './Cell';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
});

test('renders as inteded', () => {
	const component = renderer.create(<Cell />);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

test('initializes as dead cell', () => {
	const component = shallow(<Cell />);
	const props = component.props();
	expect(props.className).toEqual('cell-dead');
})

test('test click event', () => {
	const mockCallBack = jest.fn();
	const component = shallow(<Cell onClick={mockCallBack}/>);
	component.find('button').simulate('click');
	expect(mockCallBack.mock.calls.length).toEqual(1);
});
