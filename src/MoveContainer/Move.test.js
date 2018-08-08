
import React from 'react';
import ReactDOM from 'react-dom';
import Move from './Move';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Move />, div);
  ReactDOM.unmountComponentAtNode(div);
});
