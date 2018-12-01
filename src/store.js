import {
  createStore, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducer';

const composeEnhancers = composeWithDevTools({});

const storeConfig = () => {
  const middlewares = [
    thunkMiddleware,
  ];
  const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(...middlewares),
  ));
  return store;
};

export default storeConfig;
