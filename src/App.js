import React from 'react';

import './App.css';

import Counter from './counter/Counter';

const App = () => {
  return (
    <div className="app-background">
      <div className="app-container container">
        Classement VTT
        <Counter/>
      </div>
    </div>
  );
}

export default App;
