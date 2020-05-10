import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { counterReducer } from './counter/Counter.store';

export default combineReducers({
  count: counterReducer,
  form: formReducer
})
