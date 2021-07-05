import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './store';
//style
import 'normalize.css';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/reset.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
