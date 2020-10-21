import React from 'react';
import { storiesOf } from '@storybook/react';

import ShowRacer from './ShowRacer';

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

const props = { racer: { firstName: 'Jean-Luc', lastName: 'Briois' }}

storiesOf('ShowRacer', module)
  .addDecorator(withTemplate)
  .add('normal', () => <ShowRacer {...props}/>);
