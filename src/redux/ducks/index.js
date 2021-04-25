import { combineReducers } from 'redux';
import { SEARCH, searchReducer } from './search';

const rootReducer = combineReducers({
  [SEARCH]: searchReducer,
});

export default rootReducer;
