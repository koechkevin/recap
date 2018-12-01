import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Provider from 'react-redux/es/components/Provider';
import { AppContainer } from './Containers';
import * as serviceWorker from './serviceWorker';
import storeConfig from './store';

ReactDOM.render(
  <Provider store={storeConfig()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
