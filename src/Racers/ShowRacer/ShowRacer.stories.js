import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ShowRacer from './ShowRacer';

import { RACER_1 } from '../racers.fixtures';

const withTemplate = (Story) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="w-1/2 border p-4">
          <Story />
        </div>
      </div>
    </div>
  );
}

const actions = {
  onDeleteRacer: action('onDeleteRacer')
}

const props = { racer: RACER_1}

storiesOf('ShowRacer', module)
  .addDecorator(withTemplate)
  .add('normal', () => <ShowRacer {...props} {...actions}/>);
