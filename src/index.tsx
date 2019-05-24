import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import App from './components/App';

import './index.css';

const root = document.getElementById('root');
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
