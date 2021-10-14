import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './phonebook-actions.js';

const rootReducer = {
  phonebook: reducer,
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;
