import React from 'react';

import { Provider } from "react-redux";

import { store } from "./store";

import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

