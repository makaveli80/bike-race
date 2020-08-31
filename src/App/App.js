import React from 'react';

import './App.css';
import Header from './Header/Header';
import Racers from '../Racers/Racers';

const App = () => {
  return (
    <div className="app-outer">
      <Header/>
      <section className="app container">
        <Racers/>
      </section>
    </div>
  );
}

export default App;
