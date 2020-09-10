import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { racersReducer } from './Racers/racers.reducer';
import { validateRacerMiddleware } from './Racers/ValidateRacer/validateRacer.middleware';
import { logErrorsMiddleware } from './App/Errors/logErrors.middleware';

const reducers = combineReducers({
  form: formReducer,
  racers: racersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  validateRacerMiddleware,
  logErrorsMiddleware
]

export default createStore(reducers,composeEnhancers(
  applyMiddleware(...middlewares)
));
