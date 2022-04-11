import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger'

const reducer = combineReducers({
  root: rootReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggingMiddleware
  )
);

export default store;
