import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './Nav';
import Home from './Home';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import tachyons from 'tachyons';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
registerServiceWorker();
