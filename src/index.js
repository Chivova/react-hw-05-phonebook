import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './components/redux/store';

import './index.css';
import App from './App';

console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
