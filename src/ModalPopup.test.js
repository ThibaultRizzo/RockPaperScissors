
import React from 'react';
import ReactDOM from 'react-dom';
import ModalPopup from './ModalPopup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalPopup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
