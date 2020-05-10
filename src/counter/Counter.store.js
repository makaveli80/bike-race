const INITIAL_STATE = 0;

const TYPE_INCREMENT = 'INCREMENT';

export const increment = () => {
  return {
    type: TYPE_INCREMENT
  };
}

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_INCREMENT:
      return state + 1;

    default:
      return state;
  }
}
