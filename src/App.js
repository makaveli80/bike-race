import React from 'react';

import './App.css';

import Counter from './counter/Counter';
import TestForm from './TestForm/TestForm';

class App extends React.Component {
  submit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="app-background">
        <div className="app-container container">
          Classement VTT
          <Counter/>
          <TestForm onSubmit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
