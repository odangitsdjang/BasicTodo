import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from '../reducer/root_reducer';

var defaultState = {
  todos: []
};

export const configureStore = (initialState = defaultState) =>  {
  const store = createStore(rootReducer, initialState, compose (
    applyMiddleware(thunk),
    autoRehydrate()
  ));
  persistStore(store, {storage: AsyncStorage});
  return store;

};