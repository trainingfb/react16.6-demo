import React from 'react';
import ReactDOM from 'react-dom';
import DemoMemo from './memo/DemoMemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoMemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
