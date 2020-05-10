import { combineReducers } from 'redux';

import { counterReducer } from './counter/Counter.store';

export default combineReducers({
  count: counterReducer
})
