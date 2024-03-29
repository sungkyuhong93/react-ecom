import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from "./store/store";

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
