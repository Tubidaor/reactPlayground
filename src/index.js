import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AppDisplay from './state-drills/AppDisplay.js'
import './index.css';
// import AppLang from './lang-context/AppLang';

import { BrowserRouter } from "react-router-dom";


ReactDOM.render( 
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById('root'));
