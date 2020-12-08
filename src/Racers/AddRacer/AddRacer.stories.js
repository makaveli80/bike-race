import React from 'react';
import { reduxForm, reducer as formReducer, Field } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddRacer from './AddRacer';

import {
  EXISTING_CATEGORIES,
  EXISTING_TEAMS
} from '../racers.fixtures';

const withReduxFormAndDevTools = (Story) => {
  const reducers = { form: formReducer };
  const reducer = combineReducers(reducers);
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="w-1/4">
            <Story />
          </div>
        </div>
      </div>
    </Provider>
  );
};

const props = {
  categories: EXISTING_CATEGORIES,
  teams: EXISTING_TEAMS
};

const actions = {
  onSubmit: action('onSubmit')
};

storiesOf('Racers/Add Racer/AddRacer', module)
  .addDecorator(withReduxFormAndDevTools)
  .add('default component', () => <AddRacer {...props} {...actions}/>);
