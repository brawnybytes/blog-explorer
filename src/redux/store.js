import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Fix the import to use named export
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
