import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  form: formReducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
