import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { racersReducer } from './Racers/Racers.reducer';
import { addRacerValidationMiddleware } from './Racers/AddRacer/AddRacer.reducer';
import { logErrorsMiddleware } from './App/Errors/logErrors.middleware';

const reducers = combineReducers({
  form: formReducer,
  racers: racersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  addRacerValidationMiddleware,
  logErrorsMiddleware
]

export default createStore(reducers,composeEnhancers(
  applyMiddleware(...middlewares)
));
