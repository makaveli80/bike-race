import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RacersSumary from './RacersSumary';

const withTemplate = (Story) => {
  return (
    <div className="bg-gray-200 min-h-screen pt-10">
      <section className="mx-auto w-5/6 bg-white m-0 rounded-lg p-4">
        <Story />
      </section>
    </div>
  );
}

storiesOf('RacersSumary', module)
  .addDecorator(withTemplate)
  .add('normal', () => <RacersSumary/>);
