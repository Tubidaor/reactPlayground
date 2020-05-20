import React from 'react';
import ReactDOM from 'react-dom';
import AppTwo from './AppTwo.js';
// for snapshots you have to "npm install react-test-renderer -D"
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  //creating element on dom
  const div = document.createElement('div');
   // rendering component into div
  ReactDOM.render(<AppTwo />, div);

  //unmount component from dom
  ReactDOM.unmountComponentAtNode(div);
})