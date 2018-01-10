import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Banner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Board />, div);
});
