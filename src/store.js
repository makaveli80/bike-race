import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { racersReducer } from './Racers/Racers.reducer';

const reducers = combineReducers({
  form: formReducer,
  racers: racersReducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
