import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';

const store = () => createStore(applyMiddleware(thunk));

export default {
  store,
};
