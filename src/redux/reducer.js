import {ADD, SUBTRACT, UPDATE} from './action';

const initialCounter = 0;
const initialTextInput = '';

export const counter = (state = initialCounter, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
    default:
      return state;
  }
};

export const textInput = (state = initialTextInput, action) => {
  switch (action.type) {
    case UPDATE:
      return (state = action.value);
    default:
      return state;
  }
};
