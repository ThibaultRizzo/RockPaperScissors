
import React from 'react';
import ReactDOM from 'react-dom';
import PlayersHistory from './PlayersHistory';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayersHistory />, div);
  ReactDOM.unmountComponentAtNode(div);
});
