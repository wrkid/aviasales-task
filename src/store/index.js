import { legacy_createStore as createStore, combineReducers } from 'redux';
import {sortingReducer} from './sortingReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  sort: sortingReducer,
  filter: filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools());