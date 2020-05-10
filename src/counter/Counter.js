import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';
import { increment } from './Counter.store';

const Counter = ({count, increment}) => {
  return (
    <div>
      <p>{count}</p>
      <button
          onClick={() => increment()}
          className="counter--button">
        [+]
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, {
  increment
})(Counter);
