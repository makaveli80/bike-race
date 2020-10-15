import React from 'react';
import { reduxForm, reducer as formReducer, Field } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchRacers from './SearchRacers';

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

const actions = {
  onSubmit: action('onSubmit'),
  onChange: action('onChange')
}

storiesOf('SearchRacers', module)
  .addDecorator(withReduxFormAndDevTools)
  .add('normal', () => <SearchRacers {...actions}/>);
