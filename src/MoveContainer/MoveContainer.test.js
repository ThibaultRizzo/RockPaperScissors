import React from 'react';
import ReactDOM from 'react-dom';
import MoveContainer from './MoveContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoveContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
