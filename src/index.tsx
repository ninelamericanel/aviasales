import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import './reset.scss';
import './normalize.scss';
import { App } from './components/App';
import reducer from './store/reducers/reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
