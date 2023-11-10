import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {sortingReducer} from './sortingReducer';
import { filterReducer } from './filterReducer';
import thunk from 'redux-thunk';
import { dataReducer } from './dataReducer';

const rootReducer = combineReducers({
  sort: sortingReducer,
  filter: filterReducer,
  data: dataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));