import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from "react-dom/client";
import { Provider } from 'react-redux';
import 'antd/dist/antd.css'
import { applyMiddleware, createStore } from 'redux';
import promiseMiddlewere from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddlewere, ReduxThunk)(createStore)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENTION__ &&
        window.__REDUX_DEVTOOLS_EXTENTION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
